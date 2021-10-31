import React, { useEffect, useState } from "react";
import "./BoxChatMessenger.css";

export default function BoxChatMessenger() {
  const [isOpen, setisOpen] = useState(false);
  // mở chát box
  const openMessengerChat = (e) => {
    e.target.closest(".box-chat-messenger-box").style.display = "none";
    setisOpen(true);
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
        <div className="chat-messenger-body">
          <div className="messenger-admin-box">
            <span
              style={{
                color: "white",
                paddingLeft: "5px",
                marginBottom: "5px",
                display: "inline-block",
              }}
            >
              Quản Trị viện Minh Khánh
            </span>
            <div>
              <img
                className="messenger-admin-avatar"
                src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
                alt=""
                title="Quản Trị viện Minh Khánh"
              />
              <p className="messenger-admin">
                có làm thì mới có ăn k làm mà đòi có ăn thì ăn đb ăn cút
              </p>
            </div>
          </div>
          <div className="messenger-clientbox">
            <p className="messenger-client">hello mother fuckker</p>
          </div>
        </div>
        <div className="chat-messenger-footer">
          <form action="">
            <input
              type="text"
              className="chat-messenger-footer-input"
              placeholder="Aa"
            />
            <button className="chat-messenger-footer-button">
              <i className="fab fa-telegram-plane"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
