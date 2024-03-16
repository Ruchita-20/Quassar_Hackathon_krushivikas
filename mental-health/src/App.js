import "./App.css";
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fix import here
import { Home } from "./components/Pages/Home";
import { Explore } from "./components/Pages/Explore";
import { Feedback } from "./components/Pages/Feedback";
import { Signup } from "./components/Pages/Signup";
import Chatbot from "./components/ChatBot";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes> {/* Corrected the import from 'Route' to 'Routes' */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          
        </div>
      {/* <a
        href="https://wa.me/9359442476"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a> */}

     <Chatbot/>
      </Router>
    </>
  );
}

export default App;
