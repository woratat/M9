import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import authUser from "../auth";
import { fetchUser } from "../actions/userAction";
import LoopIcon from "@mui/icons-material/Loop";

import MessageSender from "./MessageSender";
import Post from "./Post";
import Addcomment from "./Addcomment";

function Feed({ className }) {
  const [post, setPost] = useState([]);
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

  useEffect(() => {
    getAllPost();
  },[]);

  return (
    <div className={className}>
      <div className="feed">
        <MessageSender />
        {post.length > 0 ? (
          <div>
            {post.map((b, key) =>
            (
              <Post
                key={key}
                id={b.postID}
                image={`http://localhost:5000/image/${b.imageName}`}
                username={b.accountID}
                timestamp={b.date}
                message={b.message}
                like={b.like}
                locationID={b.locationID}
              />
            ))}
            

          </div>
        ) : (
          <div className="loading_feed">
            <LoopIcon />
            <p>Loading feed....</p>
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
`;
