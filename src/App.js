import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Screens/Home";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}