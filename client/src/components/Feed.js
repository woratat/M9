import React from "react";
import styled from "styled-components";
import axios from "axios";

import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed({className}) {
  // const createPost = () => {
  //   axios.get("")
  // }

  return (
    <div className={className}>
      <div className="feed">
        <MessageSender />
        <Post
          profileSrc="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzAyMDMwMjQzNTA1NTA0/donald_trump_photo_michael_stewartwireimage_gettyimages-169093538jpg.jpg"
          image="https://media-cdn.tripadvisor.com/media/photo-s/18/18/e0/af/burgers-is-our-specialty.jpg"
          username='Woratat'
          timestamp="This is time stamp"
          message="Burger!"
        />
        {/* <Post
          key={id}
          profileSrc={profileSrc}
          image={image}
          username={username}
          timestamp={timestamp}
          message={message}
        /> */}
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
`;
