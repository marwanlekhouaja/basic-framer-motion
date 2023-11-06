import React from "react";
import { motion, useScroll } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Section from "./Section";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
function Animation() {
  const {scrollYProgress}=useScroll()
  console.log(scrollYProgress)
  return (
    <>
      {/* partie header */}
      <motion.div style={{height:'5px',scaleX:scrollYProgress,background: 'rgb(129,57,217)',
      backgroundColor: 'linear-gradient(90deg, rgba(129,57,217,1) 0%, rgba(56,83,200,1) 24%, rgba(255,0,215,1) 100%)',position:'fixed',top:0,left:0,right:0,transformOrigin:0}}
      // animate={{
        
      // }}
      ></motion.div>
      <Header />
      <motion.h2
        initial={{
          opacity: 0.5,
          y: "-100vh",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        duration={{
          delay: 1,
          duration: 7,
        }}
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          marginTop: "12px",
        }}
      >
        Welcome User
      </motion.h2>
      {/* partie content */}
      <Section />

      {/* partie out team && about us */}
      <AboutUs />

      {/* partie footer */}
      <div className="footer p-2 d-flex align-items-center justify-content-evenly">
        
        <Footer />
        <Footer />
        <Footer />
        <Footer />
      </div>
    </>
  );
}

export default Animation;
