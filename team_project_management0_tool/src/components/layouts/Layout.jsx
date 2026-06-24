import React from "react";
import NavBar from "./Navbar";
import SideNavBar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <SideNavBar />
      <div className="flex-1">
        <NavBar />
      </div>
    </div>
  );
};

export default Layout;
