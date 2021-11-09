import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";

function SidebarRow({ className, src, Icon, title }) {
  return (
    <div className={className}>
      <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
      </div>
    </div>
  );
}

SidebarRow.propTypes = { title: PropTypes.string };

export default styled(SidebarRow)`
  .sidebarRow {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }

  .sidebarRow:hover {
    background-color: lightgrey;
    border-radius: 10px;
  }

  .sidebarRow > h4 {
      margin-left: 20px;
      font-weight: 600;
  }

  .sidebarRow > .MuiSvgIcon-root {
      font-size: xx-large;
      color: #2e81f4;
  }
`;
