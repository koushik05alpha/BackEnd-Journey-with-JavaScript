import React from "react";
import Navbar from "./compontents/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={HomeScreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
