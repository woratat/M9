import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import Header from "../components/Header";
import LoopIcon from '@mui/icons-material/Loop';
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Post from "../components/Post";



function Profile({ className }) {
  const [user, setUser] = useState("");
  const [post, setPost] = useState([]);
  const userID = localStorage.getItem("username_account");
  // const date = user.createdAt.splice(0, 10).split("-");
  // const test = date.join("/");
  // let re = /(\w+)\/(\w+)\/(\w+)/;
  // let newstr = test.replace(re, "$3/$2/$1");


  const getUserPost = async () => {
    await axios
      .get("http://localhost:5000/api/feed/user",{
        params: {
          id: user.accountID,
        }
      })
      .then((response) => {
        setPost(response.data.post.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getUserPost();
  }, [user]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/auth/id", {
      params: {
        username: userID,
      },
    })
      .then(function (response) {
        setUser(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userID]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Pholio | Profile</title>
      </Helmet>
      <div className={className}>
        <div className="header">
          <Header />
        </div>

        <div className="profile">
          <div className="profile_left">
            <Avatar className="svg_icons" />
          </div>
          <div className="profile_center">
            <h1>Name: {user.name}</h1>
            <h3>Contact: {user.email}</h3>
          </div>
          <div className="profile_right">
            <Button
              className="btn_add"
              variant="contained"
            >
              Add friend
              <AddIcon sx={{ ml: 0.5 }} />
            </Button>
          </div>
        </div>

        <div className="home_body">
        {post.length > 0 ? (
          <div className="post_card">
            {post.map((b) => (
              <Post
                key={b.postID}
                id={b.postID}
                image={`http://localhost:5000/image/${b.imageName}`}
                username={user.username}
                timestamp={b.date}
                message={b.message}
                like={b.like}
              />
            ))}
          </div>
        ) : (
          <div className="loading_feed">
            <LoopIcon/>
            <p>Loading feed....</p>
          </div>
        )}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default styled(Profile)`
  .profile {
    display: flex;
    height: 40vh;
    margin: 80px 280px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  }

  .profile_left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3333333333%;
  }

  .svg_icons {
    transform: scale(4);
  }

  .profile_center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3333333333%;
    flex-direction: column;
  }

  .profile_right {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 40px;
    width: 33.3333333333%;
  }

  .btn_add {
    background-color: #ff3f3d;
    border-radius: 5px;
    padding: 10px;
    color: #fff;
  }

  .btn_add:hover {
    background-color: #910000;
  }

  .home_body {
    display: flex;
    justify-content: center;
  }

  .loading_feed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .post_card {
    margin-bottom: 20px;
  }
`;
