import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import authUser from "../auth";
import { fetchUser, deleteUser } from "../actions/userAction";
import lodash from "lodash";

function Header({ className }) {
  const user = useSelector((state) => state.user);
  const [accounts, setAccounts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const dispatch = useDispatch();
  const path = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user_token");
    dispatch(deleteUser({}));
    path("/Login");
  };

  const getAllUser = async () => {
    axios
      .get("http://localhost:5000/api/auth/all")
      .then((response) => {
        setAccounts(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = accounts.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    console.log(newFilter);

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  useEffect(() => {
    const refreshUser = async () => {
      const getUser = await authUser();
      if (lodash.isEmpty(getUser)) {
        path("/Login");
      } else {
        dispatch(fetchUser(getUser));
      }
    };

    refreshUser();
    getAllUser();
  }, [dispatch, path]);

  return (
    <div className={className}>
      <div className="header">
        <div className="header_left">
          <Link to="/" className="logo_home">
            <img src={logo} alt="Pholio" className="logo_img" />
          </Link>
          <div className="header_search">
            <div className="header_input">
              {filterData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
              <input type="text" placeholder="Search" onChange={handleSearch} />
            </div>
            {filterData.length !== 0 && (
              <div className="search_result">
                {filterData.slice(0, 10).map((value, key) => {
                  return (
                    <Link
                      className="dataItem"
                      to="/profile"
                      state={{ from: value.username }}
                    >
                      <Avatar sx={{ ml: 1 }} />
                      <p>{value.username}</p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="header_center">
          <NavLink
            className={(isActive) =>
              "header_option" + (!isActive ? " header_option--active" : " ")
            }
            to="/"
          >
            <HomeIcon fontSize="large" />
          </NavLink>
          <NavLink
            className={(isActive) =>
              "header_option" +
              (!isActive ? " header_option header_option--active" : "")
            }
            to="/location"
          >
            <MapIcon fontSize="large" />
          </NavLink>
          <NavLink
            className={(isActive) =>
              "header_option" +
              (!isActive ? " header_option header_option--active" : "")
            }
            to="/friend"
          >
            <SupervisorAccountIcon fontSize="large" />
          </NavLink>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Link
              className="user_profile"
              to="/profile"
              state={{ from: user.username }}
            >
              <Avatar></Avatar>
              <h4>{user.username}</h4>
            </Link>
            <Link to="/login" className="signOutLink" onClick={handleLogout}>
              <LogoutIcon className="logout_icon" id="logout_icon" />
              <label htmlFor="logout_icon" className="label_logout">
                Logout
              </label>
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
    position: relative;
  }

  .header_left {
    display: flex;
    justify-content: space-evenly;
  }

  .logo_img {
    cursor: pointer;
  }

  .logo_home:hover {
    background-color: #fff;
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

  .header_left > a > img {
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

  .logout_icon {
    background-color: #fff;
  }

  .label_logout {
    margin-left: 2px;
    background-color: #fff;
  }

  .label_logout:hover {
    cursor: pointer;
  }

  .header_info {
    background-color: #fff;
  }

  .signOutLink {
    background-color: #fff;
  }

  .search_result {
    position: absolute;
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    border-radius: 10px;
  }

  .search_result::-webkit-scrollbar {
    display: none;
  }

  .search_result .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
  }

  .dataItem p {
    margin-left: 10px;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    background-color: lightgrey;
  }

  #clearBtn {
    cursor: pointer;
  }

  .user_profile {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .user_profile:hover {
    background-color: #fff;
  }

  @media only screen and (max-width: 800px) {
    .user_profile {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    .header_input, .header_center {
      display: none;
    }
  }
`;
