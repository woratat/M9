import React, { useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Feed from "../components/Feed";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUser } from "../actions/userAction";
import authUser from "../auth";


function Home({ className }) {
  // const user = useSelector(state => state.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const refreshUser = async () => {
  //     try {
  //       const getUser = await authUser()
  //     dispatch(fetchUser(getUser));
  //     } catch (error) {
  //       console.log(error);
  //     }
      
  //   };

  //   refreshUser();
  // }, [dispatch]);

  // if (!user.token) {
  //   return <Navigate to="/Login" />;
  // }

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
