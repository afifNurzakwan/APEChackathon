import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import "../css/Homepage.css";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <nav className="nav-container">
      <a href="/" className="nav-logo" onClick={scrollToTop}>
        IndiLink
      </a>

      <ul className="menu">
        <li className="menu-slot">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>
        {/* <li className="menu-slot">
          <ScrollLink
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Profile
          </ScrollLink>
        </li> */}
        <li className="menu-slot">
          <ScrollLink
            to="vendors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Vendors
          </ScrollLink>
        </li>
        <li className="menu-slot">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </ScrollLink>
        </li>
        <li className="menu-slot">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
