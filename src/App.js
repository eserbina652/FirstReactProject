import "./app.css";
import React, { useEffect } from "react";
import Main from "./screens/main/Main";
import CryptoList from "./screens/crypto/CryptoList";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/crypto"}>Тыць</Link>
        <Link to={"/"}>Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/crypto" element={<CryptoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
BrowserRouter - it is wrapper
The element that is at the top is always visible on each page
We must wrap pages in Rotes tag, don't forget to specify the way of page
in attribute 'path' and attribute to in first el which always visible and
to specify (attribute with name 'element') the el to which this way belongs.
 */
