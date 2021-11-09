import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function MessageSender({ className }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput('');
  };

  return (
    <div className={className}>
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messageSender_input"
              placeholder={`What's onn your mind`}
            />
            <button onClick={handleSubmit} type="submit">
              Hidden submit
            </button>
          </form>
        </div>

        <div className="messageSender_bottom">
          <div className="messageSender_option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Livestream</h3>
          </div>

          <div className="messageSender_option">
            <PhotoLibrary style={{ color: "green" }} />
            <h3>Photos</h3>
          </div>

          <div className="messageSender_option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(MessageSender)`
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
`;
