import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FooterWrapper, IconMenu, UpArrow } from "./FooterElements";
import { AiOutlineUpCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <IconMenu>
          <a href="https://github.com/SujalLama" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-lama-aa6824196/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/sujalballama/" target="_blank">
            <FaFacebook />
          </a>
        </IconMenu>

        <p>Created by Sujal Lama. &copy; 2021</p>

        <UpArrow to="home" spy={true} smooth={true} duration={1000}>
          <AiOutlineUpCircle />
        </UpArrow>
      </FooterWrapper>
    </>
  );
};

export default Footer;
