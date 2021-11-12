import React from "react";
import styled from "styled-components";

function Admin({ className }) {
  return (
    <div>
      <div className={className}>
        <div className="container">
          <div className="title">Add Location</div>
          <div className="from">
            <div className="title-input">Name</div>
            <div className="input-box">
              <input
                className="input"
                type="text"
                id="Email"
                name="Email"
              ></input>
            </div>
            <div className="title-input">Description</div>
            <div className="input-box">
              <textarea
                className="input"
                type="textarea"
                id="Email"
                name="Email"
              ></textarea>
            </div>
            <div className="box-latlon">
              <div>
                <div className="title-input">Latitude</div>
                <div className="input-box">
                  <input
                    className="input"
                    type="text"
                    id="Email"
                    name="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="title-input">Longitude</div>
                <div className="input-box">
                  <input
                    className="input"
                    type="text"
                    id="Email"
                    name="Email"
                  ></input>
                </div>
              </div>
            </div>
            <div className="title-input">
              <input
                className="btn-submit"
                type="button"
                value="Register"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default styled(Admin)`
  .container {
    margin: 5% 10%;
    height: 750px;
    background: #ffffff;
  }
  .title {
    margin: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
  }
  .from {
    margin: 25px;
  }
  .title-input {
    margin: 0 50px 0 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 42px;
  }
  .input-box {
    margin: 15px 50px 15px 50px;
  }
  .input {
    width: 100%;
    padding: 1%;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
  .box-latlon {
    display: flex;
  }
  .btn-submit {
      margin-top: 25px;
    height: 50px;
    width: 150px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    background: #e70000;
    color: #ffffff;
  }
  .btn-submit:hover{
    background: #ffffff;
    color: #e70000;
  }

  * {
    /* border: 1px solid black; */
  }
`;
