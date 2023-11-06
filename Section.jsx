import React from "react";
import { motion } from "framer-motion";
import jude from "./img/bellingham.png";

function Section() {
  const styleButton = {
    borderRadius: "7px",
    padding: "5px",
    width: "150px",
    backgroundColor: "white",
    border: "2px solid cornflowerblue",
    color: "black",
    fontFamily: "monospace",
  };
  return (
    <>
      <div className="content mt-4 d-flex align-items-center  justify-content-around container">
        <motion.div
          initial={{
            marginLeft: "-200vh",
            opacity: 0.5,
          }}
          animate={{
            opacity: 1,
            marginLeft: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.4,
            ease: "easeInOut",
          }}
          className="blabla text-center"
        >
          <h2>Jude Bellingham</h2>
          <p style={{ width: "380px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quasi
            vitae necessitatibus voluptatibus modi possimus nesciunt
            exercitationem totam eligendi tenetur dolores sed eius corrupti illo
            deleniti, doloribus explicabo alias. Ad!
          </p>
          <motion.button
            whileHover={{
              scale: "1.1",
              backgroundColor: "cornflowerblue",
            }}
            transition={{
              // delay:.4,
              duration: 4,
            }}
            style={styleButton}
          >
            watch
          </motion.button>
        </motion.div>
        <motion.div
          initial={{
            marginRight: "-200vh",
            opacity: 0.5,
          }}
          animate={{
            opacity: 1,
            marginRight: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 0.4,
            ease: "easeInOut",
          }}
          className="image"
        >
          <img
            src={jude}
            style={{ width: "350px", height: "350px" }}
            alt="pic"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Section;
