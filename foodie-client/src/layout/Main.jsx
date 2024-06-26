import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../contexts/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
