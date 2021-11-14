
import { io } from "socket.io-client";


  const URL = "http://localhost:3000/socketClient";
  const socket = io(URL, { autoConnect: false }, { forceNew: true });
  // socket.onAny((event, ...args) => {
  //   console.log(event, args);
  // });

 

export default socket;
