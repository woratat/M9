import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import authUser from "../auth";
import { fetchUser } from "../actions/userAction";

function Header({ className }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshUser = async () => {
      dispatch(fetchUser(await authUser()));
    };

    refreshUser();
  }, [dispatch]);

  return (
    <div className={className}>
      <div className="header">
        <div className="header_left">
          <img src={logo} alt="Facebook" />
          <div className="header_input">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header_center">
          <div className="header_option header_option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header_option">
            <MapIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SupervisorAccountIcon fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar />
            <h4>{user.username}</h4>
            <Link to="/login" className="signOutLink">
              <LogoutIcon className="logout_icon" id="logout_icon" />
              <label for="logout_icon" className="label_logout">Logout</label>
            </Link>
          </div>
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
    height: 60px;
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
    color: red;
  }

  .header_option--active > .MuiSvgIcon-root {
    color: red;
  }

  .header_option--active {
    border-bottom: 4px solid red;
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
    margin-right: 15px;
  }

  .header_info > .signOutLink {
    margin-left: 20px;
    margin-right: 5px;
    font-weight: semibold;
    display: flex;
    cursor: pointer;
  }

  .header_info > .signOutLink:hover {
    color: red;
  }

  .header_right {
    display: flex;
  }

  .logout_icon:hover {
    color: red;
    cursor: pointer;
  }

  .label_logout {
    margin-left: 2px;
  }

  .label_logout:hover {
    cursor: pointer;
  }
`;
