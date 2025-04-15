
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Layouts/Navbar"
import Home from "./Pages/Home"
import Properties from "./Pages/Properties"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Sell from "./Pages/Sell"
import About from "./Pages/About"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
