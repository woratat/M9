import React from 'react'
import styled from "styled-components";
import { Avatar } from "@mui/material";


function Story({ className, image, profileSrc, title }) {
    return (
        <div className={className}>
            <div className="story" style={{backgroundImage: `url(${image})`}}>
                <Avatar src={profileSrc} className="story_avatar"/>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default styled(Story)`
    .story {
        position: relative;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 120px;
        height: 200px;
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        margin-right: 10px;
        transition: transform 100ms ease-in;
        cursor: pointer;
    }

    .story:hover {
        transform: scale(1.07);
    }

    .story_avatar {
        margin: 10px;
        border: 5px solid #2e81f4;
    }

    .story > h4 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
    }
`;
