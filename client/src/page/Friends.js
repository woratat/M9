import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import styled from "styled-components";
import LoopIcon from "@mui/icons-material/Loop";
import axios from "axios";


function Friends({ className }) {
    const [user, setUser] = useState([]);


    const getAllUser = async () => {
        await axios
          .get("http://localhost:5000/api/auth/all")
          .then((response) => {
            setUser(response.data.content)
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getAllUser();
      }, []);

  return (
    <div className={className}>
      <Header />
      <div className="cards">
        {user.length > 0 ? (
          <div>
            {user.map((b, key) => (
              <Card 
              className="card-items" 
              key={key}
              id={key}
              name={b.name}
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
