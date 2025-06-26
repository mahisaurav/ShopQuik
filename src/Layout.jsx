import React from "react";
import { Outlet } from "react-router-dom";

// ✅ Correct relative imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>

    <ScrollToTop /> {/* runs on every route change */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
