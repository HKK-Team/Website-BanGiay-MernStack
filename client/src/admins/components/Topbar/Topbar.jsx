import React,{useContext} from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings} from "@material-ui/icons";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import axios from "axios";
import {GlobalState} from '../../../GlobalState';
import { toastSuccess } from "../ToastMassage/ToastMassage";
export default function Topbar() {
  const state = useContext(GlobalState);
  const [admin] = state.adminApi.admin;
    // Logout
    const logoutUser = async () => {
      await axios.get("/admin/logout");
  
      localStorage.removeItem("AdminLogin");
  
      window.location.href = "/Admin";
    };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HKK team</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
          <img src="https://as2.ftcdn.net/v2/jpg/02/50/31/95/500_F_250319577_BuOE8gd49LUD41DFH6eY3mahs0Q6n8Jp.jpg" alt="" className="topAvatar" onClick={()=>{toastSuccess("Hello Admin " + admin.username)}}/>
          </div>
          <div className="topbarIconContainer">
          <Link to="/Admin" onClick={logoutUser}>
            <LogoutIcon />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}