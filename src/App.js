import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import SkillsEdu from './pages/Skills_Edu';
import Experiences from './pages/Experiences';
import Hobbies from './pages/Hobbies';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/NhatQuang-website/' exact element={<Home/>}/>
        <Route path='/NhatQuang-website/profil' exact element={<Profile/>}/>
        <Route path='/NhatQuang-website/skills_edu' exact element={<SkillsEdu/>} />
        <Route path='/NhatQuang-website/experiences' exact element={<Experiences/>} />
        <Route path='/NhatQuang-website/hobbies' exact element={<Hobbies/>} />
        <Route path='/NhatQuang-website/contact' exact element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
