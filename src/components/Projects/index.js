import React, { useState } from "react";

import {
  Wrapper,
  Col1,
  Col2,
  Col3,
  ColWrapper,
  ImageWrapper
} from "./ProjectElements";

import bookish from "../../images/bookish.JPG";
import wordify from "../../images/wordify.JPG";
import emi from "../../images/emi-calc.JPG";
import pixalarity from "../../images/pixalarity.JPG";
import taskManage from "../../images/task-manage.JPG";
import theory from "../../images/theory.JPG";
import transitive from "../../images/transitive.JPG";
import expense from "../../images/expense-tracker.JPG";

import { FaGlobe } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const [website, setWebsite] = useState(true);

  const [webapp, setWebapp] = useState(false);

  const openWebsite = () => {
    setWebsite(true);
    setWebapp(false);
  };

  const openWebapp = () => {
    setWebsite(false);
    setWebapp(true);
  };

  return (
    <>
      <Wrapper id="projects">
        <Col1>
          <h2>Projects</h2>
        </Col1>
        <Col2 website={website} webapp={webapp}>
          <button onClick={openWebsite}>Wetsites</button>
          <button onClick={openWebapp}>Webapps</button>
        </Col2>

        {website && (
          <Col3>
            <ColWrapper>
              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Bookish</h3>
                  <div className="content">
                    <a href="https://bookish-sale.netlify.app/" target="_blank">
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/SujalLama/bookish"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit Site</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={bookish} />
                </ImageWrapper>
              </div>

              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Pixalarity</h3>
                  <div className="content">
                    <a href="https://pixalarity.netlify.app/" target="_blank">
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/SujalLama/pixalarity"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit Site</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={pixalarity} />
                </ImageWrapper>
              </div>

              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Transitive</h3>
                  <div className="content">
                    <a href="https://transitive.netlify.app/" target="_blank">
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/SujalLama/Transitive-website"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit Site</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={transitive} />
                </ImageWrapper>
              </div>

              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Theory</h3>
                  <div className="content">
                    <a href="https://theory-site.netlify.app/" target="_blank">
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/SujalLama/theory"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit Site</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={theory} />
                </ImageWrapper>
              </div>
            </ColWrapper>
          </Col3>
        )}

        {webapp && (
          <Col3>
            <ColWrapper>
              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Task Manager</h3>
                  <div className="content">
                    <a
                      href="https://task-performer.netlify.app/"
                      target="_blank"
                    >
                      <FaGlobe />
                    </a>

                    <a href="https://github.com/SujalLama" target="_blank">
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit App</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={taskManage} />
                </ImageWrapper>
              </div>

              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Income/Expense Tracker</h3>
                  <div className="content">
                    <a href="https://bachat.netlify.app/" target="_blank">
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/SujalLama/Income-Expense-tracker"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit App</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={expense} />
                </ImageWrapper>
              </div>

              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>EMI Calculator</h3>
                  <div className="content">
                    <a
                      href="https://react-emicalculator.netlify.app/"
                      target="_blank"
                    >
                      <FaGlobe />
                    </a>

                    <a href="https://github.com/SujalLama" target="_blank">
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit App</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={emi} />
                </ImageWrapper>
              </div>

              <div className="slide slide-bottom">
                <div className="slide-content">
                  <h3>Wordify</h3>
                  <div className="content">
                    <a
                      href="https://wordify-react.netlify.app/"
                      target="_blank"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href="https://github.com/SujalLama/wordify"
                      target="_blank"
                    >
                      <AiFillGithub />
                    </a>
                    <br />

                    <span className="des">Visit App</span>
                    <span className="des">Visit Github</span>
                  </div>
                </div>
                <ImageWrapper>
                  <img src={wordify} />
                </ImageWrapper>
              </div>
            </ColWrapper>
          </Col3>
        )}
      </Wrapper>
    </>
  );
};

export default Projects;
