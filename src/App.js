import Homepage from "./pages/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Vendors from "./components/Vendors";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
