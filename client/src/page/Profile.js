import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Post from "../components/Post";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

function Profile({ className }) {
  const [user, setUser] = useState("");
  const [post, setPost] = useState([]);
  const [profile, setProfile] = useState([]);
  const [style, setStyle] = useState({});
  const [clicked, setClicked] = useState(false);
  const userID = localStorage.getItem("username_account");
  const params = useLocation();
  const { from } = params.state;

  const getUserPost = async () => {
    await axios
      .get("http://localhost:5000/api/feed/user", {
        params: {
          id: profile.accountID,
        },
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
  }, [profile]);

  const getUserProfile = async () => {
    await axios
      .get("http://localhost:5000/api/auth/id", {
        params: {
          username: from,
        },
      })
      .then((response) => {
        setProfile(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, [from]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/id", {
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

  const handleAddFriend = (e) => {
    e.preventDefault();
    const id = {
      accountID: profile.accountID,
      accountFriendID: user.accountID
    }
    axios.post("http://localhost:5000/api/friend/add", id)
      .then(function (response) {
        setStyle({display: 'none'});
        setClicked(!clicked);

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Add request has been sent.",
        })
      }).then(function (response) {
        localStorage.setItem("addFriend", !clicked);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
            <h1>Name: {profile.name}</h1>
            <h3>Contact: {profile.email}</h3>
          </div>
          <div className="profile_right" style={style}>
            {user.username == profile.name && clicked == false ? (
              <div></div>
            ) : (
              <Button className="btn_add" variant="contained" onClick={handleAddFriend}>
                Add friend
                <AddIcon sx={{ ml: 0.5 }} />
              </Button>
            )}
          </div>
        </div>

        <div className="home_body">
          {post.length > 0 ? (
            <div className="post_card">
              {post.map((b, key) => (
                <Post
                  key={key}
                  id={b.postID}
                  image={`http://localhost:5000/image/${b.imageName}`}
                  username={b.accountID}
                  timestamp={b.date}
                  message={b.message}
                  like={b.like}
                  locationID={b.locationID}
                  isUser={user.accountID}
                />
              ))}
            </div>
          ) : (
            <div className="loading_feed">
              <SentimentVeryDissatisfiedIcon />
              <p>This user has not post anything yet.</p>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default styled(Profile)`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  
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

  @media only screen and (max-width: 800px) {
    .svg_icons {
      display: none;
    }
    .profile {
      width: 40%;
    }
  }
`;
