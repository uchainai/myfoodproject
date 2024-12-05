// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import ChatNavbar from "./Webappcomponent/ChatNavbar"
 import Singup from "./Webappcomponent/Singup"
 import Profile from "./Webappcomponent/Profile"

function App() {
  return (
    <Router>
      <ChatNavbar/>
      <Routes>
        <Route path="/"  element={<ChatNavbar/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </Router>
  );
}

export default App;
