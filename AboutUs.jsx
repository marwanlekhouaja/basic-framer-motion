import React from "react";
import { motion } from "framer-motion";
import jude from "./img/jude.png";
function AboutUs() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between container mt-4">
        <motion.div
          initial={{
            y: "100vh",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 2,
            delay: 0.2,
          }}
          className="m-3 text-light container bg-dark rounded shadow-lg p-4"
        >
          <h3 className=" text-center">Our team</h3>
          <motion.p
            initial={{
              opacity: 0,
              color: "black",
            }}
            animate={{
              opacity: 1,
              color: "white",
            }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
            style={{ fontSize: "17px", height: "100px" }}
          >
            Équipes actuelles : Équipe d'Angleterre de football (#22 / Milieu de
            terrain), Real Madrid Club de Fútbol (#5 / Milieu de terrain)
          </motion.p>
        </motion.div>
        <motion.div
          initial={{
            y: "100vh",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 2,
            delay: 0.2,
          }}
          className="m-3 container text-light bg-dark rounded shadow-lg p-4 d-flex  align-items-center justify-content-between"
        >
          <div>
            <h3 className="text-center">About Us</h3>
            <p style={{ fontSize: "17px", height: "100px" }}>
              Jude Bellingham, né le 29 juin 2003 à Stourbridge, est un
              footballeur international anglais qui évolue au poste de milieu de
              terrain au Real Madrid
            </p>
          </div>
          <motion.img drag initial={{y:12}} animate={{y:0}} transition={{ease:'easeInOut',duration:4,delay:.4,repeat:'loop'}} src={jude} alt="" style={{ width: "110px", height: "110px" }} />
        </motion.div>
      </div>
    </>
  );
}

export default AboutUs;
