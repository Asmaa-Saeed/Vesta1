import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Layouts/Navbar"
import Home from "./Pages/Home"
import Properties from "./Pages/Properties"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Sell from "./Pages/Sell"
import Profile from "./Pages/Profile"
import About from "./Pages/About"
import Register from "./Pages/Registeration/Register"
import Login from "./Pages/Registeration/Login"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer />
      </Router>
    </>
  )
}

export default App