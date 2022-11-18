import React from "react";
import SideBar from "../../components/sidebar";
import { MainContentConatiner } from "../../styles/views/mainContent";
import Login from "../login";

const MainContainer = () => {
  return (
    <MainContentConatiner>
      <SideBar />
      <Login />
    </MainContentConatiner>
  );
};

export default MainContainer;
