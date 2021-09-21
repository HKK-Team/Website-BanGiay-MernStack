import React,{useState} from "react";
import "./AdminLogin.css";
import axios from "axios"
export default function AdminLogin() {
  // declare admin
  const [admin, setAdmin] = useState({
    email:'', password: ''
  })
  // set admin
  const onChangeInput = e =>{
      const {name, value} = e.target;
      setAdmin({...admin, [name]:value})
  }
  // post from client to server
  const loginSubmit = async e =>{
      e.preventDefault()
      try {
          await axios.post('/admin/login', {...admin})
          localStorage.setItem('AdminLogin', true)
          alert("Login Successfully!")
          window.location.href = "/Dashboard";
      } catch (err) {
          alert(err.response.data.msg)
      }
  }
  return (
    <div className="AdminLogin_box">
      <form action="" onSubmit={loginSubmit}>
        <h1>Admin Login</h1>
        <input 
          type="Email" 
          placeholder="Nhập Email của bạn" 
          required 
          name = "email"
          autoComplete="on"
          value={admin.email} 
          onChange={onChangeInput}
        />
        <input 
          type="password" 
          placeholder="Nhập mật khẩu của bạn"
          required 
          name = "password"
          autoComplete="on"
          value={admin.password} 
          onChange={onChangeInput} 
        />
        <button>Đăng nhập</button>
      </form>
      <h2>
        Trang quản trị <br />
        copyright © 2021 HKK team
      </h2>
    </div>
  );
}
