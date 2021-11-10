import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Login from "../page/Login";

function Home({ className }) {

  return (
    <div className={className}>
      <div className="home">
        <Header />

        <div className="home_body">
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

  /* .home_body {
    display: flex;
  } */
`;
