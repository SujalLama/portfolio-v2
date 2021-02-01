import React from "react";

import {
  Wrapper,
  Col1,
  Col2,
  ImageWrapper,
  Content,
  ListWrapper
} from "./AboutElements";

const About = () => {
  
  return (
    <>
      <Wrapper id="about">
        <Col1>
          <h2>About Me ...</h2>
          <ImageWrapper>
            <img src={process.env.PUBLIC_URL + '/images/me.jpg'} />
          </ImageWrapper>
          <Content>
            <p>
              Hi, I am sujal lama. I am a frontend developer situated in Boudha,
              kathmandu, Nepal. I am a BBA graduate. I always had a keen
              interest on technology especially web technologies and wondered
              how it works. So, after graduation, I dedicated my time and effort
              on learning web technologies.
            </p>

            <p>
              I wasn't satisfied with the wordpress though it is a great tool. I
              wanted to fully customize my website. So I started exploring about
              the web technologies. I started learning about HTML, CSS,
              Javascript, react and node. The more I learned about these the
              more I got hooked into these technologies. Hence, now I aspire to
              make career in this field.
            </p>
          </Content>
        </Col1>
        <Col2>
          <h2>
            Technologies
            <br /> I <br />
            Use
          </h2>
          <ListWrapper>
            <ul>
              <li>Figma</li>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
            </ul>

            <ul>
              <li>Github</li>
              <li>Gatsby</li>
              <li>Contentful</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </ListWrapper>
        </Col2>
      </Wrapper>
    </>
  );
};

export default About;
