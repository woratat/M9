import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/images/logo.jpg";

function Header({ className }) {
  return (
    <div className={className}>
      <div className="header">
        <div className="header_left">
          <img src={logo} alt="Facebook" />
          <div className="header_input">
            <SearchIcon />
            <input type="text" placeholder="Search"/>
          </div>
        </div>
        <div className="header_center">
          <div className="header_option header_option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header_option">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SubscriptionsIcon fontSize="large" />
          </div>
          <div className="header_option">
            <StorefrontIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SupervisorAccountIcon fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar />
            <h4>Username</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default styled(Header)`
  .header {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    background-color: #fff;
    top: 0;
    z-index: 100;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  }

  .header_left {
    display: flex;
    justify-content: space-evenly;
  }

  .header_input {
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 999px;
    height: 55px;
  }

  .header_input > input {
    height: 45px;
  }

  .header_left > img {
    height: 50px;
  }

  .header_input > input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
  
  .header_center {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .header_option > .MuiSvgIcon-root {
    color: gray;
  }
  
  .header_option:hover > .MuiSvgIcon-root {
    color: #2e81f4;
  }

  .header_option--active > .MuiSvgIcon-root {
    color: #2e81f4;
  }

  .header_option--active {
    border-bottom: 4px solid #2e81f4;
  }

  .header_option {
    display: flex;
    align-items: center;
    padding: 0 30px;
    cursor: pointer;
  }

  .header_option:hover {
    background-color: #eff2f5;
    border-radius: 10px;
    align-items: center;
    padding: 0 30px;
    border-bottom: none;
  }

  .header_info {
    display: flex;
    align-items: center;
  }

  .header_info > h4 {
    margin-left: 10px;
  }

  .header_right {
    display: flex;
  }
`;
