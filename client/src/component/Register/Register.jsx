import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import "./Register.css";

export default function Register() {
  const [user, setUser] = useState({
    firstname:'', lastname : '', email:'', password: ''
})

const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
}

const registerSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('http://localhost:5000/user/register', {...user})
        localStorage.setItem('Created!', true)
        alert("Created User Succesfully!")
        window.location.href = "/Login";
    } catch (err) {
        alert(err.response.data.msg)
    }
}
  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <div className="register_wrapper">
            <div id="login" className="user_box">
              <h1 className="account-title">Đăng ký</h1>
              <form action="/register" id="customer_register" onSubmit={registerSubmit}>
                <div className="last-name input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name = "firstname"
                    className="text"
                    placeholder="Họ"
                    size="32"
                    value={user.firstname} 
                    onChange={onChangeInput}
                  />
                </div>
                <div className="fisrt-name input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="fisrt_name"
                    className="text"
                    name = "lastname"
                    placeholder="Tên"
                    size="32"
                    value={user.lastname} 
                    onChange={onChangeInput}
                  />
                </div>
                <div className="email input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    id="email-user"
                    className="text"
                    name = "email"
                    placeholder="Email"
                    size="32"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    value={user.email} 
                    onChange={onChangeInput}
                  />
                </div>
                <div className="password input">
                  <label htmlFor="" className="icon-field">
                    <i className="fa fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    id="password-user"
                    className="text"
                    name = "password"
                    placeholder="Mật khẩu"
                    size="32"
                    pattern="((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){6,20})"
                    value={user.password} 
                    onChange={onChangeInput}
                  />
                  {/* Mật khẩu phải chứa ít nhất một chữ số [0-9].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết thường [a-z].
                    Mật khẩu phải chứa ít nhất một ký tự Latinh viết hoa [A-Z].
                    Mật khẩu phải chứa ít nhất một ký tự đặc biệt như! @ # & ().
                    Mật khẩu phải có độ dài ít nhất 6 ký tự và tối đa 20 ký tự. */}
                </div>
                <input type="submit" value="Đăng ký" className="btn-signin" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
