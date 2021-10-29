import "./NewUser.css";
import { useState } from "react";
import axios from "axios";
import { toastPromise } from "../../components/ToastMassage/ToastMassage";
// tạo mới người dùng
export default function NewUser() {
  // New User
  const [users, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    address: "",
  });
  // set New User
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };
  // post from client to server
  const EditUserSubmit = async (e) => {
    e.preventDefault();
    await toastPromise(
      axios.post("http://localhost:5000/admin/CreatUser", { ...users }),
      () => {
        setTimeout(() => (window.location.href = "/usersAdmin"), 2000);
        return "Create Users Succesfully!";
      }
    );
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={EditUserSubmit}>
        <div className="newUserItem">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name..."
            required
            value={users.firstname}
            onChange={onChangeInput}
          />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name..."
            name="lastname"
            required
            value={users.lastname}
            onChange={onChangeInput}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="email@gmail.com"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={users.email}
            onChange={onChangeInput}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password..."
            name="password"
            required
            pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
            autoComplete="on"
            value={users.password}
            onChange={onChangeInput}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+0 984 943 851"
            name="phonenumber"
            required
            value={users.phonenumber}
            onChange={onChangeInput}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="Biên Hòa | VN"
            name="address"
            required
            value={users.address}
            onChange={onChangeInput}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
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
