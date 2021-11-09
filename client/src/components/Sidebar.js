import React from 'react';
import styled from "styled-components";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront"
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";

import SidebarRow from "./SidebarRow";

function Sidebar({ className }) {
    return (
        <div className={className}>
            <SidebarRow title="Pages" Icon={EmojiFlagsIcon}/>
            <SidebarRow title="Friends" Icon={PeopleIcon}/>
            <SidebarRow title="Messenger" Icon={ChatIcon}/>
            <SidebarRow title="Marketplace" Icon={StorefrontIcon}/>
            <SidebarRow title="Videos" Icon={VideoLibraryIcon}/>
            <SidebarRow title="See More" Icon={ExpandMoreOutlined}/>
        </div>
    )
}

export default styled(Sidebar)`
    .sidebar {
        padding: 25px 10px;
        flex: 0.33;
    }
`;
