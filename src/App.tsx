import { useState } from "react"
import Navbar from "./components/navbar"
import LandingPage from "./components/LandingPage"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import BinaryRain from "./components/BinaryRain"
import './App.css'
import { Routes, Route } from "react-router-dom"
import { CssVarsProvider, extendTheme } from "@mui/joy/styles"
import { Box } from "@mui/joy"

const theme = extendTheme({
  fontFamily: {
    body: 'Neuropol, sans-serif',
    display: 'Neuropol, sans-serif',
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <CssVarsProvider theme={theme}>
      <Box className={isDarkMode ? "page-wrapper-dark" : "page-wrapper-light"}>
        <BinaryRain isDarkMode={isDarkMode} />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/experience" element={<Experience isDarkMode={isDarkMode}/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode}/>}/>
          </Routes>
        </Box>
      </Box>
    </CssVarsProvider>
  )
}

export default App
