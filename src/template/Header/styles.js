import styled from "styled-components";
import { Link } from "gatsby";
export const Navbar = styled.nav`
  max-width: 1920px;
  margin: 0 auto;
  display: block;
  padding: 28px 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${(props) => props.background};
  transition: all 0.2s ease;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
export const Contact = styled(Link)`
  background-color: #c7ae86;
  border: none;
  color: white;
  border-radius: 20px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: #a08c6b;
  }
`;
export const NavLink = styled(Link)`
  display: block;
  color: #4d4e56;
  font-weight: 500;
  font-size: 22px;
  position: relative;
  &:hover {
    color: #c7ae86;
  }
  &:hover:after {
    width: 100%;
    transition: all 0.2s ease;
  }
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 2px;
    width: 20%;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  margin-top: 50px;
  svg {
    margin-right: 20px;
    height: 20px;
    width: 30px;
    color: #c4c4c4;
  }
  li {
    display: flex;
    align-items: center;
    width: max-content;
    margin-bottom: 1rem;
  }
`;
