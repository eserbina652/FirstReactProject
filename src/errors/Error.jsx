import React from "react";
import "./err.css";

const Error = ({ error }) => {
  return (
    <div className="err-wrapper">
      <p className="err-str">{error}</p>
    </div>
  );
};

export default Error;
