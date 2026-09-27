import React from "react";
import { Outlet } from "react-router";
import Nav from "../nav";
import Footer from "../footer";

function Mainlayout() {
  return (
    <div className="">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Mainlayout;
