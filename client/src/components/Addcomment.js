import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import socketIOClient from "socket.io-client";
import styled from "styled-components";
import { useSelector } from "react-redux";

function AddComment({ className, id }) {
  const user = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [news,setnew]=useState("");

  useEffect(() => {
    const socket = socketIOClient(`http://localhost:5000`);
    const response = () => {
      socket.emit("room", 'id');
      socket.on("message", (newMessage) => {
        setnew(newMessage)
        console.log('newM :>> ', newMessage);
      });
      console.log('object :>> ', news);
    };

    response();
    return () => {
      socket.disconnect();
    };
  }, [news, id]);

  function onSubmit(event) {
    console.log("s");
    event.preventDefault();
    addCommentData();
  }

  async function addCommentData() {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/comment/post",
        {
          message: comment,
        },
        {
          timeout: 2000,
        }
      );

      if (res.status === 200) {
        const socket = socketIOClient("http://localhost:5000");
        socket.emit("room", "id");
        socket.emit("sand-message", comment);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={className}>
      <form id="create-form" onSubmit={onSubmit}>
        <div className="input-group">
          <textarea
            name="name"
            type="text"
            id="name"
            placeholder="Comment here..."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button type="submit">Post</button>
        {/* { user.length === 1 ? <button type="submit">Post</button> : <Link to="/login" className="btn-back">Post</Link> } */}
      </form>
    </div>
  );
}

AddComment.propTypes = {
  className: PropTypes.string.isRequired,
  movieToken: PropTypes.string,
  id: PropTypes.number,
};

export default styled(AddComment)`
  box-sizing: border-box;

  .input-group textarea {
    width: 100%;
    height: 60px;
    padding: 13px;
    border-radius: 5px;
    outline: none;
    resize: none;
    font-size: 16px;
    margin-top: 20px;
    border: 1px solid #bfbfbf;
  }
  textarea:focus {
    border: 2px solid rgba(48, 87, 225, 1);
  }
  textarea::-webkit-scrollbar {
    width: 0px;
  }
  button,
  .btn-back {
    float: right;
    width: 5rem;
    height: 2rem;
    background-color: rgba(48, 87, 225, 1);
    color: white;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
