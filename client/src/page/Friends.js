import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";

function Friends({ className }) {
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    await axios
      .get("http://localhost:5000/api/auth/all")
      .then((response) => {
        setUser(response.data.content);
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
        <div className="card-main">
          {user.map((b, key) => (
            <Card
              className="card-items"
              key={key}
              id={b.accountID}
              name={b.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default styled(Friends)`
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  
  .cards {
    margin: 50px 100px;
  }

  .card-main {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    grid-gap: 10px;
  }
`;
