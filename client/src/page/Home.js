import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

function Home({ className }) {
  return (
    <div className={className}>
      <div className="home">
        <Header />

        <div className="home_body">
          <Sidebar />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default styled(Home)`
  .home {
    background-color: #f1f2f5;
    height: 100vh;
  }

  .home_body {
    display: flex;
  }
`;
