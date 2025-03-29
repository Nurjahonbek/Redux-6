import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OnlineUser from "../components/OnlineUser";

function MainLayout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar />
      <main className="col-start-3 col-end-11  overflow-x-auto">
        <Navbar />
        <Outlet />
      </main>
      <OnlineUser />
    </div>
  );
}

export default MainLayout;
