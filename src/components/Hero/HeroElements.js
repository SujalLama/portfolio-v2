import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #721cc9;
`;

export const HeroWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  position: relative;

  &::before {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    border-left: 3px solid #fff;
    border-top: 3px solid #fff;
    z-index: 2;
    top: 1.5em;
    left: 0;
  }

  &::after {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    z-index: 2;
    bottom: 2em;
    right: 0;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: minmax(500px, 1fr);
    grid-template-rows: repeat(2, minmax(400px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50%);
    padding-top: 3em;
  }
`;

export const Col1 = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Col2 = styled(motion.div)`
  width: 100%;
  height: 100%;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -25px 56px 0 30px #f49301;
  img {
    width: 100%;
    height: 100%;
    /* width: 400px;
    height: 400px; */
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 250px;
    box-shadow: -10px 18px 0 20px #f49301;
  }
`;

export const Typography = styled.div`
  img {
    width: 80%;
    height: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    img {
      width: 60%;
      height: 60%;
      margin-left: 8em;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 70%;
      height: 70%;
      margin-left: 3em;
    }
  }
`;
