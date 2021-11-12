import React, { useState } from "react";
import styled from "styled-components";
import img from "../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions/userAction";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Login({ className }) {
  let path = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const routeChange = () => {
    path("/register");
  };

  const handleChanged = (e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/login", {
          auth: {
            username: inputs.username,
            password: inputs.password,
          },
        });

        if (res.status === 200) {
          localStorage.setItem("user_token", res.data.token);
          localStorage.setItem("username_account", res.data.username);
          dispatch(
            fetchUser({ token: res.data.token, username: res.data.username })
          );
          
          path("/");
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    getUser();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Pholio | Login</title>
      </Helmet>
      <div className={className}>
        <div className="login">
          <div className="box-screen">
            <div className="container">
              <img className="img-logo" src={img} alt="" />
              <div className="Text-Username">Username</div>
              <input
                className="From"
                type="text"
                id="Username"
                name="username"
                placeholder="Your Username..."
                autoComplete="off"
                onChange={handleChanged}
                value={inputs.username}
              ></input>
              <div className="Text-Password">Password</div>
              <input
                className="From"
                type="password"
                id="Password"
                name="password"
                placeholder="Your Password..."
                autoComplete="off"
                onChange={handleChanged}
                value={inputs.password}
              ></input>
              <input
                className="btn-Login"
                type="button"
                value="Login"
                onClick={loginHandler}
              ></input>
              <input
                className="btn-regis"
                type="button"
                value="Register"
                onClick={routeChange}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default styled(Login)`
  display: flex;
  flex-direction: column;
  align-content: center;
  place-items: center;
  margin-top: 100px;
  .container {
    width: 450px;
    height: 500px;
    background: #e70000;
    border-radius: 20px;
  }
  .img-logo {
    width: 100px;
    height: 100px;
    margin: 27px 175px;
  }
  .Text-Username {
    width: 60px;
    height: 28px;
    margin: 15px 45px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
  }
  .From {
    width: 371px;
    height: 49px;
    padding: 12px 20px;
    margin-left: 45px;
    background: #ffffff;
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }

  .Text-Password {
    width: 60px;
    height: 28px;
    margin: 15px 45px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
  }
  .btn-Login {
    width: 125px;
    height: 50px;
    margin: 15px 0 0 95px;
    background: #ffffff;
    border-radius: 20px;
    color: #e70000;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
  .btn-Login:hover {
    color: #ffffff;
    background: #e70000;
  }
  .btn-regis {
    width: 125px;
    height: 50px;
    margin: 15px 10px;
    background: black;
    border-radius: 20px;
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
  .btn-regis:hover {
    color: #000000;
    background: #e70000;
  }
`;
