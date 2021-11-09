import React from "react";
import styled from "styled-components";

import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";

function Feed({className}) {
  return (
    <div className={className}>
      <div className="feed">
        {/* <StoryReel/> */}
        <MessageSender />
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
