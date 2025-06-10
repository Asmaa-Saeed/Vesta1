
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Layouts/Navbar"
import Home from "./Pages/Home"
import Properties from "./Pages/Properties"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Sell from "./Pages/Sell"
import About from "./Pages/About"
import Register from "./Pages/Registeration/Register"
<<<<<<< HEAD
=======
import Login from "./Pages/Registeration/Login"
>>>>>>> e2d41ed5df0df818ffbe1a005e08ce5db32f52e1

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
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        </Routes>
        <footer />
      </Router>
=======
          <Route path="/login" element={< Login/>} />
        </Routes>
    </Router>
>>>>>>> e2d41ed5df0df818ffbe1a005e08ce5db32f52e1
    </>
  )
}

export default App
