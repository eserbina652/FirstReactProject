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
