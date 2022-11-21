import React, { useState, useEffect } from "react";
import { Navbar, Contact, NavLink, NavList } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSquarePhone,
  faUser,
  faBriefcase,
  faClipboardQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/redstone-header-logo.svg";
import { Drawer } from "antd";
import { Link } from "gatsby";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [headerColor, setHeaderColor] = useState("none");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("white") : setHeaderColor("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <>
      <Drawer
        placement="left"
        onClose={onClose}
        visible={visible}
        style={{ zIndex: "999999999" }}
      >
        <NavList>
          <li>
            <FontAwesomeIcon icon={faHouse} className="nav-icon" />
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <NavLink to="/who-we-are">Who We Are</NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} />
            <NavLink to="/what-we-do">What We Do</NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faClipboardQuestion} />
            <NavLink to="/why-us">Why Us</NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faSquarePhone} />
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </NavList>
      </Drawer>
      <Navbar
        background={headerColor}
        style={
          headerColor == "white"
            ? { boxShadow: "0px 9px 5px 0px rgba(0,0,0,0.25)" }
            : null
        }
      >
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#C7AE86", cursor: "pointer" }}
              onClick={showDrawer}
            />
          </li>
          <li>
            <Link to="/">
              <img src={Logo} alt="Redstone Advisors Inc." />
            </Link>
          </li>
          <li>
            <Contact to="/contact-us">Contact Us</Contact>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default Header;
