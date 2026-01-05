import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import Background from "../common/background";
import CustomCursor from "../common/CustomCursor";

function Layout() {
  return (
    <Background>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </Background>
  );
}

export default Layout;
