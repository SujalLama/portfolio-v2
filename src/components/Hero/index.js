import React from "react";
import {
  Wrapper,
  HeroWrapper,
  ImageWrapper,
  Typography,
  Col1,
  Col2
} from "./HeroElements";
// import author from "../../images/author.jpg";
// import heroName from "../../images/heroname.svg";

const Hero = () => {
  return (
    <>
      <Wrapper id="home">
        <HeroWrapper>
          <Col1
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ImageWrapper>
              <img src={process.env.PUBLIC_URL + '/images/author.jpg'} />
            </ImageWrapper>
          </Col1>
          <Col2
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Typography>
              <img src={process.env.PUBLIC_URL + '/images/typo.svg'} />
            </Typography>
          </Col2>
        </HeroWrapper>
      </Wrapper>
    </>
  );
};

export default Hero;
