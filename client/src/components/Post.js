import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RoomIcon from '@mui/icons-material/Room';

function Post({ className, profileSPic, image, username, message, like }) {
  return (
    <div className={className}>
      <div className="post">
        <div className="post_top">
          <Avatar src={profileSPic} className="post_avatar" />
          <div className="post_topInfo">
            <h3>{username}</h3>
            <div className="post_time_lo">
              <p>timestamp</p>
              <RoomIcon fontSize="small" sx={{mt: 1}} style={{color: "#125688"}}/>
              <p>location</p>
            </div>
            
            
          </div>
        </div>

        <div className="post_bottom">
          <p>{message}</p>
        </div>

        <div className="post_image">
          <img src={image} alt="" />
        </div>

        <div className="">
          <FavoriteBorderIcon className="like_button" id="like_button_outline"/>
          <FavoriteIcon className="like_button" id="like_button" style={{display: "none"}}/>
          <input type="text" placeholder={`Comment...`}/>
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
    margin-right: 15px;
  }

  .post_topInfo > h3 {
    font-size: medium;
    margin: 3px 0px;
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

  .like_button {
    cursor: pointer;
    color: #fb3958;
  }

  .post_time_lo {
    display: flex;
    font-size: small;
  }

  .post_time_lo > p{
    margin-right: 12px;
  }

  .room_icon {

  }
`;
