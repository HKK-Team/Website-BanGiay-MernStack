import React,{useState,useContext} from "react";
import "../Update_Account/Update_Account";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { GlobalState } from "../../../GlobalState";
export default function Update_Account() {
  const state = useContext(GlobalState)
  const [profile] = state.userAPI.user;
  const [user, setUser] = useState({
    old_password : '', password : '',confirm_password : '', email :profile.email, _id : profile._id
  })
  const onChangeInput = e =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value,})
  }
  const EditUserSubmit = async e =>{
      e.preventDefault()
      try {
          await axios.post('http://localhost:5000/user/editPassword', {...user})
          alert("Change password successfully!")
          window.location.href = "/Profile"
      } catch (err) {
          alert(err.response.data.msg)
      }
  };
  return (
    <div className="user-boxx">
      <form onSubmit={EditUserSubmit}>
        <input
          type="password"
          id="first_name"
          className="input_text"
          placeholder="Nhập mật khẩu cũ..."
          name = "old_password"
          value={user.old_password} 
          autoComplete="on"
          required
          onChange={onChangeInput} 
        />
        <input
          type="password"
          id="last_name"
          className="input_text"
          placeholder="Nhập mật khẩu mới..."
          name = "password"
          value={user.password} 
          autoComplete="on"
          required
          onChange={onChangeInput}
        />
        <input
          type="password"
          id="email"
          className="input_text"
          placeholder="Nhập lại mật khẩu..."
          name = "confirm_password"
          value={user.confirm_password} 
          autoComplete="on"
          required
          onChange={onChangeInput}
        />
        <div className="button">
          <input type="submit" className="btn" value="Cập nhật"/>
          <span>
            Hoặc <Link to = "/UpdateAccount">Hủy</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
