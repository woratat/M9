import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import styled from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import React, { useState, useEffect } from "react";



function Friends({ className }) {

    const getAllUser = async () => {
        await axios
          .get("http://localhost:5000/api/auth/all")
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getAllUser();
      });

  return (
    <div className={className}>
      <Header />
      <div className="cards">
        {post.length > 0 ? (
          <div>
            {post.map((b) => (
              <Card className="card-items" 
              
              />
            ))}
          </div>
        ) : (
          <div className="loading_feed">
            <LoopIcon />
            <p>Loading page....</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default styled(Friends)`
  .cards {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    grid-gap: 10px;
  }

  .card-items {
  }
`;
