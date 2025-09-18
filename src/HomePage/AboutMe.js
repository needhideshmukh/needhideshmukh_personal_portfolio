import React from "react"
import { motion } from "framer-motion"
import "./BodyStyle.css"

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Hey there! I'm Needhi. I'm a Project Management Apprentice at
            Google, but you can think of me as a professional digital
            problem-solver. My specialty? I build bots and automations that do
            the boring work for me (and my team!). My proudest moments involve
            teaching a machine to fill out forms and answer questions, so I
            don't have to.
          </p>
          <p>
            When I’m not busy building a robot army to conquer manual tasks, I’m
            probably debating a chess move, getting lost in a good poem, or
            perfecting my cannonball in the pool. I love a good challenge,
            whether it’s a tricky bug, a blank page of code, or just a really
            long word puzzle.{" "}
          </p>
          <p>
            Ultimately, I'm just here to make technology a little more fun and a
            lot less tedious. Let's make some magic (and maybe a little chaos)
            together!
          </p>
          <p>Here are a few topics we could bond over :</p>
          <ul className="tech-list">
            <li>Python</li>
            <li>SQL</li>
            <li>Poetry</li>
            <li>My Next Chess Move</li>
            <li>Cliff Diving</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src="../assets/profilePhoto.jpg" alt="Your Name" />
      </motion.div>
    </section>
  )
}

export default About
