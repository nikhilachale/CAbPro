import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarLoader from "./components/CarLoader";

function Layout() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <CarLoader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
