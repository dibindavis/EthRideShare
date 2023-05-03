import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
const Dashboard = () => {  
  return (
    <div style={{background:"#BBE1FA",height:"100%",width:"100%",overflow:'hidden'}}>
      <Header/>
      <div style={{marginTop:"4.2rem"}}>
      <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard; 
