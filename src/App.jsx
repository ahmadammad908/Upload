import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <GridLoader
            color="#4F46E5"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default App;
