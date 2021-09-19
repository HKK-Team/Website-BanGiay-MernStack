import "./NewUser.css";

// tạo mới người dùng
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="Đoàn" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Minh khánh" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Khanhdoan693@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+0 984 943 851" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Biên Hòa | VN" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}