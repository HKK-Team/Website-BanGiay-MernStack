const { InMemorySessionStore } = require("./sessionStore");
const sessionStore = new InMemorySessionStore();
const { InMemoryMessageStore } = require("./messageStore");

const messageStore = new InMemoryMessageStore();
function chatBoxMessengerCtl(server) {
  const { Server } = require("socket.io");
  const io = new Server(server);
  const client = io.of("/socketClient");
  // middleware
  client.use((socket, next) => {
    const sessionID = socket.handshake.auth.sessionID;

    if (sessionID) {
      const session = sessionStore.findSession(sessionID);
      if (session) {
        console.log(`sessionID ${sessionID} đã kết nối lại`);
        socket.sessionID = sessionID;
        socket.userID = session.userID;
        socket.username = session.username;
        return next();
      }
    }
    const username = socket.handshake.auth.username;
    if (!username) {
      console.log("user không tồn tại, vui lòng kết nối lại");
      return next(new Error("invalid err"));
    }
    // create new session
    let SessionIDConvertString = Math.round(Math.random() * 100000);
    socket.sessionID = `${SessionIDConvertString}`;
    socket.userID = Math.round(Math.random() * 100000);
    socket.username = username;
    console.log("Đã khỏi tạo sessionID", SessionIDConvertString);
    next();
  });

  client.on("connection", (socketClient) => {
    //---------------------------------clinets------------------------------------
    // persist session
    sessionStore.saveSession(socketClient.sessionID, {
      userID: socketClient.userID,
      username: socketClient.username,
      connected: true,
    });

    socketClient.emit("session", {
      sessionID: socketClient.sessionID,
      userID: socketClient.userID,
      username: socketClient.username,
    });

    // xự kiện vào phòng client
    socketClient.on("joinRoom", ({ username }) => {
      socketClient.join(socketClient.userID);
      console.log(`${username} join room ${socketClient.userID}`);
      socketClient.emit("message", {
        to: 123123,
        username: "Hệ thống",
        content: `Chào ${username}, quản trị viên sẽ trả lời bạn trong vòng vài phút, vui lòng chờ.`,
      });
    });

    // xự kiện send messenger client
    socketClient.on("private message client", (data) => {
      console.log(
        `${data.username} gửi gói tin đến phòng ${socketClient.userID}`
      );
      client
        .to(data.to)
        .to(socketClient.userID)
        .emit("private message server", data);
      // admin.to(data.to).to(socketClient.userID).emit("private message server", data);
      admin.emit("private message server", data);
      messageStore.saveMessage(data);
    });

    socketClient.on("disconnect", async () => {
      const matchingSockets = await io.in(socketClient.userID).allSockets();
      const isDisconnected = matchingSockets.size === 0;
      if (isDisconnected) {
        // notify other users
        socketClient.broadcast.emit("user disconnected", socketClient.userID);

        // update the connection status of the session
        sessionStore.saveSession(socketClient.sessionID, {
          userID: socketClient.userID,
          username: socketClient.username,
          connected: false,
        });
      }
    });
  });

  //---------------------------------admin------------------------------------
  // get all user connection send admin
  const admin = io.of("/DashBoardMessenger");
  admin.on("connection", function (socket) {
    console.log("admin conection");

    // lưu lại tin nhắn
    const messagesPerUser = new Map();
    messageStore.findMessagesForUser(socket.userID).forEach((message) => {
      const {  to,  room } = message;
      const otherUser = socket.userID === room ? to : room;
      if (messagesPerUser.has(otherUser)) {
        messagesPerUser.get(otherUser).push(message);
      } else {
        messagesPerUser.set(otherUser, [message]);
      }
    });
    // gửi danh sách users conection cho admin
    const users = [];
    sessionStore.findAllSessions().forEach((session) => {
      users.push({
        userID: session.userID,
        username: session.username,
        connected: session.connected,
        messages: messagesPerUser.get(session.userID) || [],
      });
    });
    admin.emit("users", users);

    // xự kiện rời phòng của admin
    socket.on("leaveRoom", (user) => {
      socket.join(user);
      console.log(`admin leave romm ${user}`);
    });
    // xự kiện vào phòng của admin
    socket.on("joinRoom", (user) => {
      socket.join(user);
      console.log(`admin connection romm ${user}`);
    });

    // gửi tin admin
    socket.on("private message Admin", (data) => {
      console.log(`admin gửi gói tin đền phòng ${data.room}`);
      client.to(data.room).emit("private message server", data);
      admin.to(data.room).emit("private message server", data);
      messageStore.saveMessage(data);
    });

    socket.on("disconnect", () => {
      console.log("admin disconnected");
    });
  });
}
module.exports = chatBoxMessengerCtl;
