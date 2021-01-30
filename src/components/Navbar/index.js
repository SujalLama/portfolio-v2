import React, { useState } from "react";
import { Nav, NavIcon, NavMenu, NavLink, NavCloseIcon } from "./NavbarElements";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [changeNavbar, setChangeNavbar] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 80) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <Nav changeNavbar={changeNavbar}>
        <div className="circle">
          <NavIcon onClick={() => setNavbar(!navbar)}></NavIcon>
        </div>
        <NavMenu navbar={navbar}>
          <NavCloseIcon onClick={() => setNavbar(!navbar)}></NavCloseIcon>
          <NavLink
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => setNavbar(!navbar)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => setNavbar(!navbar)}
          >
            About Me
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => setNavbar(!navbar)}
          >
            Projects
          </NavLink>
          <NavLink
            to="design"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => setNavbar(!navbar)}
          >
            Design Process
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
