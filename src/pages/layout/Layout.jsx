import React from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
// import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="layoutWrapper">
      <div className="mainContect">
        <div className="top">
          {/* nav section flex 2 */}
          <Nav />

          {/* main section flex 9 */}
          <Outlet></Outlet>
        </div>

        {/* 这里的footer组件的布局应该分为左右，左边2，右边9 */}
        
        {/* <Footer></Footer> */}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
