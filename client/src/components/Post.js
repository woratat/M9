import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ToggleIcon from "material-ui-toggle-icon";

function Post({
  className,
  id,
  image,
  username,
  timestamp,
  message,
  like,
}) {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  var executed = false;
  var check = false;

  const likeHandler = async (id) => {
    if (!executed) {
      executed = true;
      axios
        .put("http://localhost:5000/api/feed/like", { postID: id })
        .then((response) => {
          // console.log(response.data.like);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const unlikeHandler = async (id) => {
    if (!check) {
      check = true;
      axios
        .put("http://localhost:5000/api/feed/unlike", { postID: id })
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getUsernamePost = async () => {
    await axios
      .get("http://localhost:5000/api/auth/username", {
        params: {
          id: username
        }
      })
      .then((response) => {
        setName(response.data.username)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUsernamePost();
  },[]);

  return (
    <div className={className}>
      <div className="post">
        <div className="post_top">
          <Avatar className="post_avatar" />
          <div className="post_topInfo">
            <h3>{name}</h3>
            <div className="post_time_lo">
              <p>{timestamp}</p>
              <RoomIcon
                fontSize="small"
                sx={{ mt: 1 }}
                style={{ color: "#125688" }}
              />
              <Link to="#" className="link_location">location</Link>
            </div>
          </div>
        </div>

        <div className="post_bottom">
          <p>{message}</p>
        </div>

        <div className="post_image">
          <img src={image} alt="" />
        </div>

        <div className="comment_like">
          <IconButton
            onClick={() => setClicked(!clicked)}
            className="like_button"
          >
            <ToggleIcon
              on={clicked}
              onIcon={
                <FavoriteIcon
                  className="like_button"
                  id={`button-${id}`}
                  onClick={() => {
                    unlikeHandler(id);
                  }}
                />
              }
              offIcon={
                <FavoriteBorderIcon
                  className="like_button"
                  id={`button-${id}`}
                  onClick={() => {
                    likeHandler(id);
                  }}
                />
              }
            />
          </IconButton>
          <h6>{like} likes</h6>
          <input
            type="text"
            placeholder={`Comment...`}
            className="comment_box"
          />
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
    width: 600px;
    margin-top: 15px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  }

  .post_top {
    display: flex;
    position: relative;
    padding: 10px 10px 2px 10px;
    align-items: center;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.5);
  }

  .post_image {
    display: flex;
    justify-content: center;
  }

  .post_image > img {
    height: auto;
    max-height: 500px;
    width: auto;
    max-width: 500px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 10px;
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
    padding: 0px 25px;
  }

  .post_bottom > p {
    margin-top: 15px;
  }

  .like_button {
    cursor: pointer;
    color: #fb3958;
  }

  .like_button:hover {
    background-color: #fff;
  }

  .post_time_lo {
    display: flex;
    font-size: small;
  }

  .post_time_lo > p {
    margin-right: 12px;
  }

  .comment_like {
    display: flex;
  }

  .comment_box {
    outline-width: 0;
    border: none;
    padding: 5px 15px;
    margin: 10px 10px;
    border-radius: 999px;
    background-color: #eff2f5;
    flex: 1;
  }

  .link_location {
    align-self: center;
  }
`;
