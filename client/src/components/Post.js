import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../actions/CommentAction";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ToggleIcon from "material-ui-toggle-icon";
import socketIOClient from "socket.io-client";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

function Post({
  className,
  id,
  image,
  username,
  timestamp,
  message,
  like,
  locationID,
  isUser,
}) {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const path = useNavigate();
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
          id: username,
        },
      })
      .then((response) => {
        setName(response.data.username);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsernamePost();
  }, []);

  const getLocation = async () => {
    await axios
      .get("http://localhost:5000/api/locations/name", {
        params: {
          locationID: locationID,
        },
      })
      .then((response) => {
        // console.log(response.data.name);
        setLocation(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/comment/get`, {
          timeout: 2000,
        });

        if (res.status === 200) {
          setComments(res.data);
          // console.log(res.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    getComment();
  }, []);

  useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    socket.emit("room", id);
    if (socket) {
      socket.on("message", (msg) => {
        setComments([msg, ...comments]);
      });

    }
  }, [ comments]);

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/comment/post",
        {
          message: comment,
          post_id: id,
        },
        {
          timeout: 2000,
        }
      );

      if (res.status === 200) {
        const socket = socketIOClient("http://localhost:5000");
        socket.emit("room", id);
        socket.emit("sand-message", comment);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      axios
      .delete("http://localhost:5000/api/feed/post", {
        params: {
          postID: id,
        },
      })
      .then(function (response) {
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      })
      .catch(function (error) {
        console.log(error);
      });
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div className={className}>
      <div className="post">
        <div className="post_top">
          <Avatar className="post_avatar" />
          <div className="post_topInfo">
            <div className="name_del">
              <h3>{name}</h3>
              {isUser == username ? <DeleteIcon className="del_icon" onClick={handleDelete}/> : <div></div>}
            </div>
            <div className="post_time_lo">
              <p>{timestamp}</p>
              <RoomIcon
                fontSize="small"
                sx={{ mt: 1 }}
                style={{ color: "#125688" }}
              />
              <Link to="/location" className="link_location" onClick={()=>{
                localStorage.setItem("location",locationID);
              }} >
                {location}
              </Link>
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
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Send
          </button>
        </div>
        <div className="Comment">
          {comments.map((data) => {
            return <div>{data.message}</div>;
          })}
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
    margin-left: 15px;
    transform: scale(1.2);
  }

  .post_topInfo > h3 {
    font-size: medium;
    margin: 10px 0px 0px 0px;
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

  .name_del {
    display: flex;
    align-items: center;
    margin: 10px 10px 0 10px;
  }

  .name_del > h3 {
    margin: 0 10px;
  }

  .name_del > .del_icon {
    cursor: pointer;
    transform: scale(0.9)
  }

  .name_del > .del_icon:hover {
    color: red;
  }
`;
