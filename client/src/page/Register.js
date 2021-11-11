import React from "react";
import styled from "styled-components";

function Register({ className }) {
  return (
    <div className={className}>
      <div className="login">
        <div className="box-screen">
          <div className="container">
            <div className="logo">Register</div>
            <div className="Text">Name</div>
            <input
              className="From"
              type="text"
              id="Email"
              name="Email"
              placeholder="Your Name..."
            ></input>
            <div className="Text">Username</div>
            <input
              className="From"
              type="password"
              id="Password"
              name="Password"
              placeholder="Your Username..."
            ></input>
            <div className="Text">Email</div>
            <input
              className="From"
              type="text"
              id="Email"
              name="Email"
              placeholder="Your Email..."
            ></input>
            <div className="Text">Password</div>
            <input
              className="From"
              type="password"
              id="Password"
              name="Password"
              placeholder="Your Password..."
            ></input>
            <input className="btn-regis" type="button" value="Register"></input>
          </div>
        </div>
      </div>
    </div>
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
