import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import IndiGroup from "../components/IndiGroup";
import Vendors from "../components/Vendors";
import Elearning from "../components/Elearning";
import Contact from "../components/Contact";

import "../css/Homepage.css";

function Homepage() {
  return (
    <div>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <IndiGroup />

      <section id="vendors">
        <Vendors />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Homepage;
