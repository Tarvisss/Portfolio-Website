import { useState } from "react"
import Navbar from "./components/navbar"
import LandingPage from "./components/LandingPage"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
// import Music from "./components/Music"
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <>
      <div className={isDarkMode ? "page-wrapper-dark" : "page-wrapper-light"}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <div>
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/experience" element={<Experience/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
              {/* <Route path="/music" element={<Music/>}/> */}
            </Routes>
          </div>
        </div>  
    </>
  )
}

export default App
