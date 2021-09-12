/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import "./Sldebar.css";
import Sidebars from "react-sidebar";
import Navbar from "./Navbar/Navbar";

export default function Sidebar() {
  // Đóng mở sidebar
  const [sidebarOpen, setsidebarOpen] = useState(false);
  var check = false;
  const open = () => {
    if (sidebarOpen === false) {
      setsidebarOpen(true);
      document.getElementsByClassName("navigation_manual")[0].style.display =
        "none";
      document.getElementsByClassName("home_cate-products")[0].style.display =
        "none";
      document.getElementsByClassName("navigation_auto")[0].style.display =
        "none";
      document.getElementsByClassName("announcement_wrapper")[0].style.display =
        "none";
    } else if (sidebarOpen === true) {
      setsidebarOpen(false);
      document.getElementsByClassName("home_cate-products")[0].style.display =
        "block";
      document.getElementsByClassName("navigation_manual")[0].style.display =
        "flex";
      document.getElementsByClassName("navigation_auto")[0].style.display =
        "flex";
      document.getElementsByClassName("announcement_wrapper")[0].style.display =
        "block";
      check = true;
    }
  };
  // lock màn hình
  useEffect(() => {
    if (sidebarOpen === true) {
      document.getElementById("root").classList.add("stop-scrolling");
    } else if (sidebarOpen === false) {
      document.getElementById("root").classList.remove("stop-scrolling");
    }
  }, [sidebarOpen]);
  //  auto đóng sidebar
  useEffect(() => {
    var lock = setInterval(function () {
      if (document.getElementById("root").clientWidth > 1024 && !check) {
        setsidebarOpen(false);
        document.getElementsByClassName("home_cate-products")[0].style.display =
          "block";
        document.getElementsByClassName(
          "announcement_wrapper"
        )[0].style.display = "block";
        document.getElementsByClassName("sidebars")[0].style.display = "none";
      } else {
        document.getElementsByClassName("sidebars")[0].style.display = "block";
        document.getElementsByClassName("slider")[0].style.zIndex = "-1";
      }
    });
    return () => {
      clearInterval(lock);
    };
  }, []);
  return (
    <Sidebars
      sidebar={<Navbar event={open} />}
      shadow={true}
      open={sidebarOpen}
      rootClassName={"sidebars"}
      sidebarClassName={"sidebar"}
      children={
        <div id="toggle">
          <i class="fas fa-bars" onClick={open}></i>
        </div>
      }
    ></Sidebars>
  );
}
