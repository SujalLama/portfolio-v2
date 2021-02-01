import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export const Nav = styled.nav`
  display: flex;
  background: ${({ changeNavbar }) =>
    changeNavbar ? "rgba(0,0,0,.7)" : "transparent"};
  position: fixed;
  width: 100vw;
  height: 80px;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 calc(100vw - 90%);
  font-size: 1.2em;
  z-index: 999;
  transition: background-color 0.5s ease-in-out;

  @media screen and (max-width: 1024px) {
    justify-content: flex-end;
    background: none;
    
  }

  .circle {
    display: none;

    @media screen and (max-width: 1024px) {
      background: #000;
      padding: 0.9em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-right: .8em;
    }
  }
`;

export const NavIcon = styled(FaBars)`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: block;
    color: #fff;
    transition: color ease-in-out 0.5s;
    &:hover {
      color: #f49301;
      transition: color ease-in-out 0.5s;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  color: #fff;
  position: relative;
  z-index: 500;

  @media screen and (max-width: 1024px) {
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    background: #000;
    clip-path: ${({ navbar }) =>
      navbar ? "circle(100%)" : "circle(0% at 85% 5%)"};

    transition: clip-path ease-in-out 0.5s;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  transition: color ease-in-out 0.5s;
  color: #fff;

  &:hover {
    color: #f49301;
    transition: color ease-in-out 0.5s;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 3em;
  }
`;

export const NavCloseIcon = styled(AiFillCloseCircle)`
  display: none;
  cursor: pointer;
  transition: color ease-in-out 0.5s;

  &:hover {
    color: #f49301;
    transition: all ease-in-out 0.5s;
  }

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 2em;
    right: 3em;
    font-size: 2em;
  }
`;
