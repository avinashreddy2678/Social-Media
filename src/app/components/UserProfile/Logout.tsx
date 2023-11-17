"use client";
import React from "react";

const Logout = ({logout}) => {
 
  return (
    <div>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
