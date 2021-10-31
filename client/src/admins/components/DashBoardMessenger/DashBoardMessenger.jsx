import React from "react";
import "./DashBoardMessenger.css";

export default function DashBoardMessenger(props) {
  return (
    <div className="DashBoardMessenger">
      <div className="DashBoardMessenger-header">
        <h1>Messenger</h1>
      </div>
      <div className="DashBoardMessenger-body">
        {/*  */}
        <div className="DashBoardMessenger-listUser">
          {/*  */}
          <div className="DashBoardMessenger-listUser-search-box">
            <div className="DashBoardMessenger-listUser-search">
              <input type="text" placeholder="Search contacts..."></input>
              <span>
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="DashBoardMessenger-listUser-users">
            {/*  */}
            <div className="DashBoardMessenger-listUser-user">
              <img
                src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
                alt=""
              />
              <div className="DashBoardMessenger-listUser-user-contact">
                <h2>Minh Khánh</h2>
                <p>helllooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className="DashBoardMessenger-listUser-admin">
            <h2>Admin : MinhKhanh</h2>
            <p>khanhdoan693@gmail.com</p>
          </div>
        </div>
        {props.contextMessenger}
        {/*  */}
      </div>
    </div>
  );
}
export function DashBoardContextMessenger() {
  return (
    <div className="DashBoardMessenger-context-box">
      <div className="DashBoardMessenger-context">
        <div className="DashBoardMessenger-context-header">
          <h2>Your message history with Minh Khánh</h2>
          <span>
            <i className="fas fa-user-plus"></i>
          </span>
        </div>
        <div className="DashBoardMessenger-context-body">
          {/*  */}
          <div className="messenger-admin-box">
            <span
              style={{
                color: "black",
                paddingLeft: "10px",
                marginBottom: "5px",
                display: "inline-block",
              }}
            >
              Minh Khánh
            </span>
            <div>
              <img
                style={{ width: "50px", height: "50px" }}
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
          <div className="messenger-client-box" style={{ marginRight: "10px" }}>
            <p className="messenger-client">hello mother fuckker</p>
          </div>
          {/*  */}
        </div>
        <div className="DashBoardMessenger-context-footer">
          <form action="">
            <input
              type="text"
              className="DashBoardMessenger-context-footer-input"
              placeholder="Aa"
            />
            <button className="DashBoardMessenger-context-footer-button">
              <i className="fab fa-telegram-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
