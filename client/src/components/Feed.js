import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import authUser from "../auth";
import { fetchUser } from "../actions/userAction";
import LoopIcon from '@mui/icons-material/Loop';

import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed({ className }) {
  const [post, setPost] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshUser = async () => {
      dispatch(fetchUser(await authUser()));
    };

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

    refreshUser();
    getAllPost();
  }, [dispatch, post]);

  return (
    <div className={className}>
      <div className="feed">
        <MessageSender />
        {post.length > 0 ? (
          <div>
            {post.map((b) => (
              <Post
                key={b.postID}
                id={b.postID}
                profileSPic=""
                image={`http://localhost:5000/image/${b.imageName}`}
                username={user.username}
                timestamp={b.createdAt}
                message={b.message}
              />
            ))}
          </div>
        ) : (
          <div className="loading_feed">
            <LoopIcon/>
            <p>Loading feed....</p>
          </div>
        )}

        {/* {post.map((b) => (
          <Post
            key={b.postID}
            // profileSrc={src}
            image={`http://localhost:5000/image/${b.imageName}`}
            username={user.username}
            timestamp={b.createdAt}
            message={b.message}
          />
        ))} */}

      </div>
    </div>
  );
}

export default styled(Feed)`
  .feed {
    flex: 1;
    padding: 30px 150px;
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
