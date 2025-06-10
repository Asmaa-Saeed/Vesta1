import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./Layouts/Navbar"
import Home from "./Pages/Home"
import Properties from "./Pages/Properties"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Sell from "./Pages/Sell"
import About from "./Pages/About"
import Register from "./Pages/Registeration/Register"
import Login from "./Pages/Registeration/Login"
import PropertyDetails from "./Pages/PropertyDetails"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={< Login/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
