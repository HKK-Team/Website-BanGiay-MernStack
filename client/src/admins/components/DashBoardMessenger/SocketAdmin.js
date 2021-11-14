import { io } from "socket.io-client";
import { toastError } from "../ToastMassage/ToastMassage";
const URL = "/DashBoardMessenger";
const socket = io(URL,  { autoConnect: false }, { forceNew: true });
socket.onAny((event, ...args) => {
  console.log(event, args);
});
//Sự connect_error kiện sẽ được phát ra khi kết nối không thành công
socket.on("connect_error", (err) => {
  toastError(`connection fail : ${err}`);
});

export default socket;
