import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert2";
import axios from "axios";
function Admin({ className }) {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    latitude: "",
    longtitude: "",
  });
  const handleChanged = (e) => {
    const { value, name } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const registerHandler = () => {
    

    const postUser = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/locations/post",
          {
            name: inputs.name,
            description: inputs.description,
            latitude: inputs.latitude,
            longtitude: inputs.longtitude,
          },
          { timeout: 2000 }
        );

        if (res.status === 200) {
          swal
            .fire({
              title: "Add Location",
              text: res.data.message,
              icon: "success",
              showConfirmButton: false,
              timer: 1200,
              allowOutsideClick: false,
            })
            .then(
              setInputs({
                name: "",
                description: "",
                latitude: "",
                longtitude: "",
              })
            );
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    postUser();
  };
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
                id="name"
                name="name"
                value={inputs.name}
                onChange={handleChanged}
                autoComplete="off"
              ></input>
            </div>
            <div className="title-input">Description</div>
            <div className="input-box">
              <textarea
                className="input"
                type="textarea"
                id="description"
                name="description"
                value={inputs.description}
                onChange={handleChanged}
                autoComplete="off"
              ></textarea>
            </div>
            <div className="box-latlon">
              <div>
                <div className="title-input">Latitude</div>
                <div className="input-box">
                  <input
                    className="input"
                    type="text"
                    id="latitude"
                    name="latitude"
                    value={inputs.latitude}
                    onChange={handleChanged}
                    autoComplete="off"
                  ></input>
                </div>
              </div>
              <div>
                <div className="title-input">Longitude</div>
                <div className="input-box">
                  <input
                    className="input"
                    type="text"
                    id="longtitude"
                    name="longtitude"
                    value={inputs.longtitude}
                    onChange={handleChanged}
                    autoComplete="off"
                  ></input>
                </div>
              </div>
            </div>
            <div className="title-input">
              <input
                className="btn-submit"
                type="button"
                value="Add"
                onClick={registerHandler}
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
  .btn-submit:hover {
    background: #ffffff;
    color: #e70000;
  }

  * {
    /* border: 1px solid black; */
  }
`;
