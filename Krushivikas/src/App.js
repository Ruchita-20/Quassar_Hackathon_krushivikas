import "./App.css";
import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fix import here
import { Home } from "./components/Pages/Home";
import { Explore } from "./components/Pages/Explore";
import { Feedback } from "./components/Pages/Feedback";
import { Signup } from "./components/Pages/Signup";
import Chatbot from "./components/ChatBot";
import Posts from "./components/Pages/Posts";
import AddPost from "./components/Pages/AddPost";
import Login from "./components/Pages/Login";
import { useState } from "react";
import Yojanas from "./components/Pages/Yojanas";
import Schemes from "./components/Pages/Schemes";
import Loans from "./components/Pages/Loans";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
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
            <Route path="/blog/posts" element={<Posts isAuth={isAuth} />} />
            <Route path="/blog/addpost" element={<AddPost isAuth={isAuth} />} />
            <Route path="/blog/login" element={<Login setIsAuth={setIsAuth} />} />
            <Route path="/yojana" element={<Yojanas/>} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/loans" element={<Loans/>} />
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

     
      </Router>
    </>
  );
}

export default App;
