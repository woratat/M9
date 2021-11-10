import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

function Post({ className, profileSPic, image, username, timestamp, message }) {
  return (
    <div className={className}>
      <div className="post">
        <div className="post_top">
          <Avatar src={profileSPic} className="post_avatar" />
          <div className="post_topInfo">
            <h3>{username}</h3>
            <p>timestamp</p>
          </div>
        </div>

        <div className="post_bottom">
          <p>{message}</p>
        </div>

        <div className="post_image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default styled(Post)`
  display: flex;
  flex-direction: column;
  align-content: center;
  place-items: center;
  .post {
    width: 90%;
    margin-top: 15px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  }

  .post_top {
    display: flex;
    position: relative;
    padding: 10px;
    align-items: center;
  }

  .post_image > img {
    width: 100%;
    border-radius: 3px;
  }

  .post_avatar {
    margin-right: 10px;
  }

  .post_topInfo > h3 {
    font-size: medium;
  }

  .post_topInfo > p {
    font-size: small;
    color: gray;
  }

  .post_bottom {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 3px 25px;
  }
`;
