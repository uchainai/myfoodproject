import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
// import FoodNav from "./Webappcomponent/FoodNav";
import LoginNow from "./Webappcomponent/LoginNow";
import DisplayFood from "./Webappcomponent/DisplayFood";
import FirstPare from "./Webappcomponent/FirstPage";
import Hero from "./Webappcomponent/Hero";
import Homepage from "./Webappcomponent/Homepage";
import ChatNavbar from "./Webappcomponent/ChatNavbar"

function App() {
  return (
    <div>
      <BrowserRouter>
      <ChatNavbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/logo" element={<Homepage />} />
          <Route path="/Navl" element={<DisplayFood />} />
          <Route path="/FoodItems" element={<LoginNow />} />
          <Route path="/Login" element={<FirstPare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
