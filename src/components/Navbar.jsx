import React from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          alignItems: "center",
          background: "white",
          position: "sticky",
          top: "0",
          padding: "10px 20px",
        }}
      >
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
          style={{ color: "#111827" }}
        >
          <Link to={"/"}>Ideas 👋</Link>
        </h1>
        <Link
          to={"/upload"}
          style={{
            padding: "8px 30px",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            marginTop: "4px",
            background: "#4F46E5",
            color: "white",
            outline: "none",
            border: "none",
          }}
        >
          <FaUpload /> <span style={{ marginLeft: "10px" }}>Upload</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
