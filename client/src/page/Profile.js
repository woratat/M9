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
  const [statuss, setStatus] = useState("");
  const [statuss2, setStatus2] = useState("");
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
    axios
      .get("http://localhost:5000/api/auth/id", {
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

  useEffect(() => {
    getFriendStatus();
    getFriendStatus2();
  }, [profile, user]);
  console.log("statuss :>> ", statuss);
  console.log("statuss2 :>> ", statuss2);
  const handleAddFriend = (e) => {
    e.preventDefault();
    const id = {
      accountID: user.accountID,
      accountFriendID: profile.accountID,
    };
    axios
      .post("http://localhost:5000/api/friend/add", id)
      .then(function (response) {
        setStyle({ display: "none" });
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
        });
      })
      .then(function (response) {
        localStorage.setItem("addFriend", !clicked);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getFriendStatus = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/friend/add", {
        params: {
          accountID: user.accountID,
          accountFriendID: profile.accountID,
        },
      });
      if (res.status == 200) {
        setStatus(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getFriendStatus2 = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/friend/add", {
        params: {
          accountID: profile.accountID,
          accountFriendID: user.accountID,
        },
      });
      if (res.status == 200) {
        setStatus2(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAcceptFriend = async () => {
    console.log(statuss2.friendID);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/friend/update?friendID=${statuss2.friendID}`
      );
      if (res.status == 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Friend accepted.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(status)
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
            {(() => {
              if (user.username == profile.name) {
                return <div></div>;
              } else if (statuss !== null) {
                if (statuss.status == "pending") {
                  return (
                    <Button
                      className="btn_add"
                      variant="contained"
                      disabled={true}
                    >
                      Pending
                      <AddIcon sx={{ ml: 0.5 }} />
                    </Button>
                  );
                }
              } else if (
                statuss2 !== null &&
                statuss2.accountID == profile.accountID &&
                statuss2.accountFriendID == user.accountID &&
                statuss2.status == "pending"
              ) {
                return (
                  <Button
                    className="btn_add"
                    variant="contained"
                    onClick={handleAcceptFriend}
                  >
                    Accept
                    <AddIcon sx={{ ml: 0.5 }} />
                  </Button>
                );
              } else if (statuss2.status == "accepted") {
                return (
                  <Button
                    className="btn_add"
                    variant="contained"
                    onClick={() => {
                      alert("unfriend");
                    }}
                  >
                    Unfriend
                    <AddIcon sx={{ ml: 0.5 }} />
                  </Button>
                );
              } else {
                return (
                  <Button
                    className="btn_add"
                    variant="contained"
                    onClick={handleAddFriend}
                  >
                    Add friend
                    <AddIcon sx={{ ml: 0.5 }} />
                  </Button>
                );
              }
            })()}
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .profile_center > h3 {
      margin: 0px;
    }
    .profile_right {
      margin-bottom: 5px;
    }
    .btn_add {
      transform: scale(0.7);
    }
  }
`;
