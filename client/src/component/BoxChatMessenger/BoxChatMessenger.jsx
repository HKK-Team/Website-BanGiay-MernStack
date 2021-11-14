import React, { useContext, useRef, useEffect, useState } from "react";

import { toastInfor } from "../../admins/components/ToastMassage/ToastMassage";
import { GlobalState } from "../../GlobalState";
import "./BoxChatMessenger.css";
import socket from "./socket";

export default function BoxChatMessenger() {
  const state = useContext(GlobalState);
  const username =
    state.userAPI.user[0].firstname + " " + state.userAPI.user[0].lastname;
  const [idUSer] = state.userAPI.iduser;
  const [isOpen, setisOpen] = useState(false);

  // mở chát box nếu chưa login chuyển đến trang login
  const openMessengerChat = (e) => {
    if (username !== "undefined undefined" && idUSer !== "") {
      e.target.closest(".box-chat-messenger-box").style.display = "none";
      setisOpen(true);
    } else if (username === "undefined undefined" && idUSer.length < 1) {
      toastInfor("vui lòng đăng nhập trước khi sử dụng tính năng này");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  };
  return (
    <div className="box-chat-messenger">
      {isOpen ? (
        <ChatMessenger />
      ) : (
        <div className="box-chat-messenger-box">
          <span className="box-chat-notification">0</span>
          <span className="box-chat-messenger-icon" onClick={openMessengerChat}>
            <i className="fab fa-facebook-messenger"></i>
          </span>
        </div>
      )}
    </div>
  );

  function ChatMessenger() {
    const [mess, setMess] = useState([]);

    // hàm gửi messenger
    const sendMessage = (content) => {
      if (content !== null) {
        const data = {
          content: content,
          to: idUSer,
          username: username,
          room : socketRef.current.userID,
        };

        socketRef.current.emit("private message client", data);
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

    const messagesEnd = useRef("");
    const socketRef = useRef();

    // xự kiện first connection
    useEffect(() => {
      socketRef.current = socket;
      socketRef.current.on("session", ({ sessionID, userID }) => {
        // attach the session ID to the next reconnection attempts
        socketRef.current.auth = { sessionID };
        // store it in the localStorage
        localStorage.setItem("sessionID", sessionID);
        // save the ID of the user
        socketRef.current.userID = userID;
      });
      let sessionID = localStorage.getItem("sessionID");

      socketRef.current.auth = { sessionID, username };
      socketRef.current.connect();

      socketRef.current.emit("joinRoom", { username});

      socketRef.current.on("message", (data) => {
        setMess((oldMsgs) => [...oldMsgs, data]);
        scrollToBottom();
      });
      return () => {
        socketRef.current.disconnect();
      };
    }, []);

    // xự kiện lắng nghe messenger
    useEffect(() => {
      socketRef.current.on("private message server", (data) => {
        setMess((oldMsgs) => [...oldMsgs, data]);
        scrollToBottom();
      });
    }, []);

    // render messenger
    const renderClient = mess.map((data, index) =>
      data.to === idUSer ? (
        <div key={index} className="messenger-client-box" ref={messagesEnd}>
          <p className="messenger-client">{data.content}</p>
        </div>
      ) : (
        <div className="messenger-admin-box" ref={messagesEnd}>
          <span
            style={{
              color: "white",
              paddingLeft: "5px",
              marginBottom: "5px",
              display: "inline-block",
              fontSize: "11px",
            }}
          >
            Quản Trị Viên {data.username}
          </span>
          <div>
            <img
              className="messenger-admin-avatar"
              src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
              alt=""
              title="Quản Trị Viên Minh Khánh"
            />
            <p className="messenger-admin">{data.content}</p>
          </div>
        </div>
      )
    );
    //
    const scrollToBottom = () => {
      if (messagesEnd.current !== null) {
        messagesEnd.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    // focus input chat
    setTimeout(() => {
      if (isOpen === true) {
        let input = document.querySelector(".chat-messenger-footer-input");
        input.focus();
      }
    }, 100);
    // đóng messenger chat
    const closeMessengerChat = (e) => {
      setisOpen(false);
    };
    return (
      <div className="chat-messenger">
        <div className="chat-messenger-header">
          <h2>Massenger</h2>
          <span className="chat-messenger-header-icon">
            <i
              className="fas fa-window-minimize"
              onClick={closeMessengerChat}
            ></i>
          </span>
        </div>
        <div className="chat-messenger-body" ref={messagesEnd}>
          {renderClient}
        </div>

        <div className="chat-messenger-footer">
          <form action="">
            <input
              onKeyDown={onEnterPress}
              type="text"
              className="chat-messenger-footer-input"
              placeholder="Aa"
            />
            <button
              type="button"
              className="chat-messenger-footer-button"
              onclick={sendMessage}
            >
              <i className="fab fa-telegram-plane"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
