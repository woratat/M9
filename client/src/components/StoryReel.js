import React from "react";
import styled from "styled-components";

import Story from "./Story";

function StoryReel({ className }) {
  return (
    <div className={className}>
      <div className="storyReel">
          <Story
            image="../assets/images/72bccf79fdf731dbd98cd9a1de812080.jpg"
            profileSrc="../assets/images/Zyc0g9Cl_400x400.jpg"
            title="Cappybara"
          />
          <Story
            image="../assets/images/72bccf79fdf731dbd98cd9a1de812080.jpg"
            profileSrc="../assets/images/Zyc0g9Cl_400x400.jpg"
            title="Cappybara"
          />
          <Story
            image="../assets/images/72bccf79fdf731dbd98cd9a1de812080.jpg"
            profileSrc="../assets/images/Zyc0g9Cl_400x400.jpg"
            title="Cappybara"
          />
          <Story
            image="../assets/images/72bccf79fdf731dbd98cd9a1de812080.jpg"
            profileSrc="../assets/images/Zyc0g9Cl_400x400.jpg"
            title="Cappybara"
          />
          <Story
            image="../assets/images/72bccf79fdf731dbd98cd9a1de812080.jpg"
            profileSrc="../assets/images/Zyc0g9Cl_400x400.jpg"
            title="Cappybara"
          />
      </div>
    </div>
  );
}

export default styled(StoryReel)`
    .storyReel {
        display: flex;
    }
`;
 