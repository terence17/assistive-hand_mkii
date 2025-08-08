import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Home from "./pages/Home";
import PastMatches from "./pages/PastMatches";
import Directory from "./pages/Directory";
import Predictions from "./pages/Predictions";
import Performance from "./pages/Performance";


function App() {
    return(
      <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Predictions" element={<Predictions />} />
          <Route path="/Directory" element={<Directory />} />
          <Route path="/PastMatches/:season" element={<PastMatches /> } />
          <Route path="/Performance" element={<Performance /> } />
        </Routes>
      </div>
    </Router>
    );

}

export default App;
