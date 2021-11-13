import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useSelector } from "react-redux";

import MapList from "./MapList";
import axios from "axios";

function MessageSender({ className }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef("");
  const user = useSelector((state) => state.user);
  const [username] = useState(user.username);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/id", {
        params: { 
          username: username
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("message", message);
    data.append("file", file);

    Axios.post("http://localhost:5000/api/feed/post", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setMessage("");
    setFile("");
  };

  return (
    <div className={className}>
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar />

          <form
            action="/feed/post"
            method="POST"
            encType="multipart/form-data"
            id="myForm"
            autoComplete="off"
          >
            <input
              type="file"
              className="messageSender_inputFile"
              name="file"
              id="input-files"
              accept="image/*"
              draggable="true"
              multiple
              ref={fileInputRef}
              onChange={(e) => {
                const image = e.target.files[0];
                if (image && image.type.substr(0, 5) === "image") {
                  setFile(image);
                } else {
                  setFile(null);
                }
              }}
              style={{ display: "none" }}
            />
            <label
              htmlFor="input-files"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <AddPhotoAlternateIcon
                fontSize="large"
                color="success"
                sx={{ mt: 0.4, ml: 4, mr: 2 }}
              />
            </label>
            <input
              value={message}
              name="file"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              className="messageSender_input"
              placeholder={`What's on your mind?`}
            />
            <button onClick={handleSubmit} type="submit">
              Hidden submit
            </button>
          </form>
        </div>

        <div className="messageSender_bottom">
          <img src={preview} alt="" id="preview_image" />
          <MapList sx={{ height: "75%" }} />
        </div>
      </div>
    </div>
  );
}

export default styled(MessageSender)`
  input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
  }

  .messageSender {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
    width: 100%;
  }

  .messageSender_top {
    display: flex;
    border-bottom: 1px solid #eff2f5;
    padding-bottom: 15px;
    padding: 15px;
  }

  .messageSender_top > form {
    flex: 1;
    display: flex;
  }

  .messageSender_top > form > input {
    outline-width: 0;
    border: none;
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 999px;
    background-color: #eff2f5;
  }

  .messageSender_top > form > button {
    display: none;
  }

  .messageSender_input {
    flex: 1;
  }

  .messageSender_inputFile {
    cursor: pointer;
  }

  .messageSender_bottom {
    display: flex;
    justify-content: space-evenly;
  }

  .messageSender_option {
    padding: 20px;
    display: flex;
    align-items: center;
    color: gray;
    margin: 5px;
  }

  .messageSender_option > h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;
  }

  .messageSender_option:hover {
    background-color: #eff2f5;
    border-radius: 20px;
  }

  .messageSender_photo {
    padding: 5px;
    display: flex;
    align-items: center;
    color: gray;
    margin: 2px;
  }

  .messageSender_photo > h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;
  }

  .messageSender_photo:hover {
    background-color: #eff2f5;
    border-radius: 20px;
  }

  .messageSender_bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #preview_image {
    margin: 10px 0px;
    width: 20%;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }
`;
