import React from "react";
import {motion} from 'framer-motion'
function Footer() {
  const styleLink={
    textDecoration: "none",
    color: "black",
  }  
  const test={
    animate:{
        x:10
    }
  }
  return (
    <>
      <div className="">
        <div  className="d-flex flex-column">
          <motion.a style={styleLink} whileHover={test.animate} href="/page1"><h4>About</h4></motion.a>
          <motion.a style={styleLink} whileHover={test.animate} href="/page2">Short sentence 2</motion.a>
          <motion.a style={styleLink} whileHover={test.animate} href="/page3">Short sentence 3</motion.a>
          <motion.a style={styleLink} whileHover={test.animate} href="/page4">Short sentence 4</motion.a>
          <motion.a style={styleLink} whileHover={test.animate} href="/page5">Short sentence 5</motion.a>
          <motion.a style={styleLink} whileHover={test.animate} href="/page6">Short sentence 6</motion.a>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
