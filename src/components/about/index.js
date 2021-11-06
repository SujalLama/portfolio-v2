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
            <p>Hi, I am sujal lama. I am a full-stack developer situated at kathmandu, Nepal.  I have one year of experience as a graphic designer and 1.5 years of coding as  a web and mobile developer.</p>
            <p>Language I know is JavaScript and dart, and frameworks I use  are react, express and flutter.    However, I am not limited to these technologies and willing to learn new ones.</p>
            <p>Coding aside, I enjoy reading, watching  movies, singing and visiting new places.</p>
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
              <li>Node</li>
              <li>GraphQl</li>
              <li>ORM</li>
              <li>Postgres</li>
              <li>MongoDB</li>
              <li>Flutter</li>
            </ul>
          </ListWrapper>
        </Col2>
      </Wrapper>
    </>
  );
};

export default About;
