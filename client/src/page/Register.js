import React, { useState } from "react";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

function Register({ className }) {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  let path = useNavigate();

  const handleChanged = (e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const registerHandler = (e) => {
    e.preventDefault();

    const postUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            username: inputs.username,
            password: inputs.password,
            email: inputs.email,
            name: inputs.name,
          },
          { timeout: 2000 }
        );

        if (res.status === 200) {
          swal
            .fire({
              title: "Sign up",
              text: res.data.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1200,
              allowOutsideClick: false,
            })
            .then(() => {
              path("/login");
            });
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    postUser();
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Pholio | Register</title>
      </Helmet>
      <div className={className}>
        <div className="login">
          <div className="box-screen">
            <div className="container">
              <div className="logo">Register</div>
              <div className="Text">Name</div>
              <input
                className="From"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name..."
                value={inputs.name}
                onChange={handleChanged}
                autoComplete="off"
              ></input>
              <div className="Text">Username</div>
              <input
                className="From"
                type="text"
                id="username"
                name="username"
                placeholder="Your Username..."
                value={inputs.username}
                onChange={handleChanged}
                autoComplete="off"
              ></input>
              <div className="Text">Email</div>
              <input
                className="From"
                type="text"
                id="email"
                name="email"
                placeholder="Your Email..."
                value={inputs.email}
                onChange={handleChanged}
                autoComplete="off"
              ></input>
              <div className="Text">Password</div>
              <input
                className="From"
                type="password"
                id="password"
                name="password"
                placeholder="Your Password..."
                value={inputs.password}
                onChange={handleChanged}
                autoComplete="off"
              ></input>
              <input
                className="btn-regis"
                type="button"
                value="Register"
                onClick={registerHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
export default styled(Register)`
  display: flex;
  flex-direction: column;
  align-content: center;
  place-items: center;
  margin-top: 40px;
  .container {
    width: 450px;
    height: 600px;
    background: #e70000;
    border-radius: 20px;
  }
  .logo {
    width: 135px;
    height: 42px;
    margin: 23px 0 0 165px;

    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #ffffff;
  }
  .Text {
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

  .btn-regis {
    width: 125px;
    height: 50px;
    margin: 30px 163px;
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
