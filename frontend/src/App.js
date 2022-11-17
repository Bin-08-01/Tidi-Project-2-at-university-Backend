import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Login from "./Component/Login"
import Register from "./Component/Register";
import Home from "./Component/Home";
import './App.css';
function App() {


  return (
    <>
      <div className=' bg-emerald-800 bg-opacity-60 w-full h-screen flex justify-center items-center' >
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
