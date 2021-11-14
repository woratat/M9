import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Feed from "../components/Feed";
import { Helmet, HelmetProvider } from "react-helmet-async";


function Home({ className }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Pholio | Home</title>
      </Helmet>
    <div className={className}>
      <div className="home">
        <Header />

        <div className="home_body">
          <Feed />
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
}

export default styled(Home)`
  .home {
    background-color: #f1f2f5;
    height: 100vh;
  }
`;
