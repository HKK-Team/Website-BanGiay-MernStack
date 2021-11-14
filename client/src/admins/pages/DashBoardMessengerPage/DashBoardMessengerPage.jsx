import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalState } from "../../../GlobalState";

import DashBoardMessenger, {
  DashBoardContextMessenger,
} from "../../components/DashBoardMessenger/DashBoardMessenger";
import socket from "../../components/DashBoardMessenger/SocketAdmin";

export default function DashBoardMessengerPage() {
  const state = useContext(GlobalState);
  const [admin] = state.adminApi.admin;
  const [users, setUsers] = useState([]);
  const [mess, setMess] = useState([]);
  const [room, setRoom] = useState();
  const socketRef = useRef();
  const messagesEnd = useRef("");
  // hàm gửi messenger
  const sendMessage = (content) => {
    if (content !== null) {
      const data = {
        content: content,
        to: admin._id,
        username: admin.username,
        room: room,
      };
      socketRef.current.emit("private message Admin", data);
    }
  };
  // xự kiện gửi messenger
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendMessage(e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    socketRef.current = socket;
    socketRef.current.connect();
    socketRef.current.on("private message server", (data) => {
      setMess((oldMsgs) => [...oldMsgs, data]);
      scrollToBottom();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    socketRef.current.emit("joinRoom", room);
  }, [room]);

  useEffect(() => {
    socketRef.current.on("users", (users) => {
      setUsers(users);
      setRoom(users[0]?.userID);
      if (users.length === 1) {
        setMess([...users[0]?.messages]);
      }
    });
  }, [users]);
  const scrollToBottom = () => {
    try {
      if (messagesEnd.current !== null) {
        messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  // lấy elemnt lớn nhất trong messenger
  let highlightText = {};
  for (let index = 0; index < mess.length; index++) {
    highlightText.content = mess[index]?.content;
    highlightText.room = mess[index]?.room;
  }
  const [name, setName] = useState("");

  return (
    <DashBoardMessenger
      listUserConnection={users.map(
        (data) => (
          <div
            className="DashBoardMessenger-listUser-user"
            ref={messagesEnd}
            data-id={data.userID}
            onClick={(e) => {
              socketRef.current.emit("leaveRoom", room);
              setRoom(data.userID);
              let nameUser = mess.find(
                (item) =>
                  item.username !== admin.username && item.room === data.userID
              );
              setName(nameUser);
              e.target
                .closest(".DashBoardMessenger-listUser-user")
                .classList.toggle("ListUser-Active");
            }}
          >
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
              alt=""
            />
            <div className="DashBoardMessenger-listUser-user-contact">
              <h2>
                {data.username}{" "}
                {data.connected ? (
                  <span className="connection"></span>
                ) : (
                  <span className="disconnection"></span>
                )}
              </h2>
              <p>
                {highlightText.room === data.userID
                  ? highlightText.content
                  : ""}
              </p>
            </div>
          </div>
        )

      )}
      nameAdmin={admin.username}
      emailAdmin={admin.email}
      contextMessenger={
        <DashBoardContextMessenger
          name={name?.username}
          input={onEnterPress}
          button={sendMessage}
          messenger={mess.map((item) =>
            item?.room === room ? (
              <React.Fragment>
                {item?.to !== admin._id ? (
                  <div className="messenger-admin-box" ref={messagesEnd}>
                    <span
                      style={{
                        color: "black",
                        paddingLeft: "10px",
                        marginBottom: "5px",
                        display: "inline-block",
                      }}
                    >
                      {item?.username}
                    </span>
                    <div>
                      <img
                        style={{ width: "50px", height: "50px" }}
                        className="messenger-admin-avatar"
                        src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
                        alt=""
                      />
                      <p className="messenger-admin">{item?.content}</p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="messenger-client-box"
                    style={{ marginRight: "10px" }}
                    ref={messagesEnd}
                  >
                    <p className="messenger-client">{item?.content}</p>
                  </div>
                )}
              </React.Fragment>
            ) : (
              ""
            )
          )}
        />
      }
    />
  );
}
