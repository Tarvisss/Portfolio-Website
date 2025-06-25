import Navbar from "./components/navbar"
import LandingPage from "./components/LandingPage"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import './App.css'
import { Routes, Route } from "react-router-dom"
// import NavItem from "./components/NavItem"
// import ComputerIcon  from './icons/computer-svgrepo-com (2).svg?react';
// import ContactIcon from "./icons/email-8-svgrepo-com (1).svg?react"
// import ExperienceIcon from "./icons/work-with-tools-work-fix-repair-svgrepo-com.svg?react"





function App() {

  return (
    <>
      <Navbar>
        {/* <NavItem icon={<ComputerIcon/>}/>
        <NavItem icon={<ContactIcon/>}/>
        <NavItem icon={<ExperienceIcon/>}/> */}
      </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
    </>
  )
}

export default App
