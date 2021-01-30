import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../about";
import Projects from "../Projects";
import Design from "../Design";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Design />
      <Footer />
    </>
  );
};

export default Home;
