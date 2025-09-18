import React from "react"
import { motion } from "framer-motion"
import "./BodyStyle.css"

const About = () => {
  return (
    <section>
      <div className="footer">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <ul className="contact-list">
              <li>Made by Needhi &#10084;</li>
              <li>
                <a href="https://drive.google.com/file/d/1XHkfYbN-X5yWYgiMqeIKDWkL7F5rUy-M/view?usp=drive_link">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
