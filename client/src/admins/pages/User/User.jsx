import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./User.css";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useState, useContext } from "react";
import axios from "axios";
import { toastPromise } from "../../components/ToastMassage/ToastMassage";
// chỉnh sửa thông tin khách hàng
export default function User() {
  // use param get userAdminId
  const params = useParams();
  // call api get allproduct
  const state = useContext(GlobalState);
  const [user] = state.alluserApi.allusers;
  // get the corresponding product
  const [data] = user.filter((item) => {
    return item._id === params.userAdminId;
  });
  // Edit User
  const [users, setUser] = useState({
    username: data.username,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    address: data.address,
    nationality: data.nationality,
    phonenumber: data.phonenumber,
    _id: data._id,
  });
  // set Edit User
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };
  // post from client to server
  const EditUserSubmit = async (e) => {
    e.preventDefault();
    await toastPromise(
      axios.post("http://localhost:5000/admin/editUser", { ...users }),
      () => {
        setTimeout(() => {
          window.location.href = "/usersAdmin";
        }, 2000);
        return "Update Users Succesfully!";
      }
    );
  };
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUserAdmin">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {data.firstname} {data.lastname}
              </span>
              <span className="userShowUserTitle">{data.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Chi tiết tài khoản</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {data.bornday.slice(0, 10)}
              </span>
            </div>
            <span className="userShowTitle">Chi tiết liên hệ</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+{data.phonenumber}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">
                {data.address} | {data.nationality} | VN
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={EditUserSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="user name"
                  className="userUpdateInput"
                  name="username"
                  value={users.username}
                  onChange={onChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Nguyễn"
                  className="userUpdateInput"
                  name="firstname"
                  value={users.firstname}
                  onChange={onChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>last Name</label>
                <input
                  type="text"
                  placeholder="Văn A"
                  className="userUpdateInput"
                  name="lastname"
                  value={users.lastname}
                  onChange={onChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="abc@gmail.com"
                  className="userUpdateInput"
                  name="email"
                  value={users.email}
                  onChange={onChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+ 098 494 385 1"
                  className="userUpdateInput"
                  name="phonenumber"
                  value={users.phonenumber}
                  onChange={onChangeInput}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Biên Hòa | VN"
                  className="userUpdateInput"
                  name="address"
                  value={users.address}
                  onChange={onChangeInput}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
