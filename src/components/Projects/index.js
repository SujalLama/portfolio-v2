import React, { useState } from "react";

import {
  Wrapper,
  Col1,
  Col2,
  Col3,
  ColWrapper,
  ImageWrapper
} from "./ProjectElements";
import './project.css';

import { FaGlobe } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import {AnimateSharedLayout, motion} from 'framer-motion';

const projects = [
  {
    name: "Digital Classroom",
    image: "./images/classroom.JPG",
    github: "https://github.com/SujalLama/online-class",
    website: "https://digital-class.netlify.app/",
  },
  {
    name: "Digital Marketplace",
    image: "./images/market.JPG",
    github: "https://github.com/SujalLama/online-marketplace",
    website: "https://digital-market.netlify.app/",
  },
  {
    name: "Expense Tracker",
    image: "./images/expense.JPG",
    github: "https://github.com/SujalLama/expense-tracker",
    website: "https://track-expense-101.netlify.app/",
  },
  {
    name: "Social Media",
    image: "./images/mern.JPG",
    github: "https://github.com/SujalLama/social-media-app",
    website: "",
  },
]
const Projects = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        <div className="project-wrapper">
        {
          projects.map(project => {
            return <div className="project">
              <img src={project.image} />
              <div className="content">
                <h3>{project.name}</h3>
                <div className="content-btn-group">
                  <a href={project.github} target="_blank"><AiFillGithub /></a>
                  {project.website && <a href={project.website} target="_blank"><FaGlobe /></a>}
                </div>
              </div>
            </div>
          })
        }
        </div>
        {/* <Col2 website={website} webapp={webapp}>
          <AnimateSharedLayout>
            <div className="wrapper">
              <div  className="btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen && <motion.div className="active" layoutId="underline" 
                        animate={{backgroundColor: '#f49301'}}
                        tansition={{stiffness: 400, damping: 30}}/>}
          <button onClick={openWebsite}>Wetsites</button>
              </div>

              <div  className="btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen || <motion.div className="active" layoutId="underline"
            animate={{backgroundColor: '#721cc9'}}
            tansition={{stiffness: 400, damping: 30}}/>}
          <button onClick={openWebapp}>Webapps</button>
              </div>
          </div>
          </AnimateSharedLayout>
        </Col2> */}

        {/* {website && (
          <Col3 >
            <ColWrapper >
            
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
                  <img src={process.env.PUBLIC_URL + '/images/bookish.JPG'} />
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
                  <img src={process.env.PUBLIC_URL + '/images/pixalarity.JPG'} />
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
                  <img src={process.env.PUBLIC_URL + '/images/transitive.JPG'} />
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
                  <img src={process.env.PUBLIC_URL + '/images/theory.JPG'} />
                </ImageWrapper>
              </div>
            </ColWrapper>
          </Col3>
        )} */}

        {/* {webapp && (
          <Col3 >
            <ColWrapper >
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
                  <img src={process.env.PUBLIC_URL + '/images/task-manage.jpg'} />
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
                  <img src={process.env.PUBLIC_URL + '/images/expense-tracker.jpg'}/>
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
                  <img src={process.env.PUBLIC_URL + '/images/emi-calc.jpg'} />
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
                  <img src={process.env.PUBLIC_URL + '/images/wordify.jpg'} />
                </ImageWrapper>
              </div>
            </ColWrapper>
          </Col3>
        )} */}
        
      </Wrapper>
    </>
  );
};

export default Projects;
