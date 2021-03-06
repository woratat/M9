import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import authUser from "../auth";
import { fetchUser } from "../actions/userAction";
import LoopIcon from "@mui/icons-material/Loop";

import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed({ className }) {
  const user = useSelector((state) => state.user);
  const [post, setPost] = useState([]);
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshUser = async () => {
      dispatch(fetchUser(await authUser()));
    };

    refreshUser();
  }, [dispatch]);

  const getAllPost = async () => {
    await axios
      .get("http://localhost:5000/api/feed/post")
      .then((response) => {
        setPost(response.data.post.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllLocation = async () => {
    await axios.get("http://localhost:5000/api/locations").then((response) => {
      setLocations(response.data);
    });
  };

  useEffect(() => {
    getAllPost();
  }, [post]);
  useEffect(() => {
    getAllLocation();
  }, []);
  locations.map((data) => {
    // console.log("data :>> ", JSON.stringify(data));
    localStorage.setItem(data.locationID, JSON.stringify(data));
  });

  return (
    <div className={className}>
      <div className="feed">
        <MessageSender />
        {post.length > 0 ? (
          <div>
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
                isUser={""}
              />
              
            ))}
          </div>
        ) : (
          <div className="loading_feed">
            <LoopIcon className="loop_icon"/>
            <p>There is nothing left....</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default styled(Feed)`
  .feed {
    flex: 1;
    padding: 20px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loading_feed {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .loading_feed > .loop_icon {
      display: none;
    }
    .loading_feed > p {
      width: 200px;
      text-align: center;
    }
  }
`;
