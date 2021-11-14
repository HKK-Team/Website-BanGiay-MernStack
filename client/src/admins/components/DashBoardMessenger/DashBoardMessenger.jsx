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
            {props.listUserConnection}
            {/*  */}
          </div>
          {/*  */}
          <div className="DashBoardMessenger-listUser-admin">
            <h2>Admin : {props.nameAdmin}</h2>
            <p>{props.emailAdmin}</p>
          </div>
        </div>
        {props.contextMessenger}
        {/*  */}
      </div>
    </div>
  );
}

export function DashBoardContextMessenger(props) {
  return (
    <div className="DashBoardMessenger-context-box">
      <div className="DashBoardMessenger-context">
        <div className="DashBoardMessenger-context-header">
          <h2>Your message history with {props.name}</h2>
          <span>
            <i className="fas fa-user-plus"></i>
          </span>
        </div>
        <div className="DashBoardMessenger-context-body">
          {/*  */}
          {props.messenger}
          {/*  */}
        </div>
        <div className="DashBoardMessenger-context-footer">
          <form action="">
            <input
              onKeyDown={props.input}
              type="text"
              className="DashBoardMessenger-context-footer-input"
              placeholder="Aa"
            />
            <button
              className="DashBoardMessenger-context-footer-button"
              onClick={props.buton}
            >
              <i className="fab fa-telegram-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
