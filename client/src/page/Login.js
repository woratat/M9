import React from "react";
import styled from "styled-components";
import img from "../assets/images/logo.jpg";

function Login({ className }) {
  return (
    <div className={className}>
      <div className="login">
        <div className="box-screen">
          <div className="container">
            <img className="img-logo" src={img} alt="" />
            <div className="Text-Email">Email</div>
            <input
              className="From"
              type="text"
              id="Email"
              name="Email"
              placeholder="Your Email..."
            ></input>
            <div className="Text-Password">Password</div>
            <input
              className="From"
              type="password"
              id="Password"
              name="Password"
              placeholder="Your Password..."
            ></input>
            <input className="btn-Login" type="button" value="Login"></input>
            <input className="btn-regis" type="button" value="Register"></input>
          </div>
        </div>
      </div>
    </div>
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
  .Text-Email {
    
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
  .btn-Login:hover{
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
  .btn-regis:hover{
    color: #000000;
    background: #e70000;
  }
`;
