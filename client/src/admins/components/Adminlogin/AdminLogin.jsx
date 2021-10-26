import React, { useState } from "react";
import {toastPromise } from "../ToastMassage/ToastMassage";

import "react-toastify/dist/ReactToastify.css";

import "./AdminLogin.css";
import axios from "axios";
export default function AdminLogin() {
  // declare admin
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  // set admin
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };
  // post from client to server
  const loginSubmit = async (e) => {
    e.preventDefault();
    await toastPromise(axios.post("/admin/login", { ...admin }), () => {
      localStorage.setItem("AdminLogin", true);
      setTimeout(() => (window.location.href = "/DashBoard"), 2000);
      return "Đăng nhập thành công 👌";
    });
  };
  return (
    <div className="AdminLogin_box">
      <form action="" onSubmit={loginSubmit}>
        <h1>Admin Login</h1>
        <input
          type="Email"
          placeholder="Nhập Email của bạn"
          required
          name="email"
          autoComplete="on"
          value={admin.email}
          onChange={onChangeInput}
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          required
          name="password"
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
