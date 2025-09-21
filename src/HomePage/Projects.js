import React from "react"
import { motion } from "framer-motion"
import "./BodyStyle.css"

const Projects = () => {
  const projectDescription = [
    {
      projectTitle: "Whack-A-Mole",
      link: "https://needhideshmukh.github.io/beat-box-in/",
      logo: "/assets/WhackAMole.jpg", // add your logos
    },
    {
      projectTitle: "Green Tiger",
      link: "https://green-tiger.vercel.app/",
      logo: "/assets/Green_tiger.png", // add your logos
    },
    {
      projectTitle: "C4GT",
      link: "https://dhiway.github.io/DMP-Inauguration/",
      logo: "/assets/c4gt.avif", // add your logos
    },
    {
      projectTitle: "Trebal",
      link: "https://trebal.org/",
      logo: "/assets/Trebal.webp", // add your logos
    },
    {
      projectTitle: "Baba Decoration",
      link: "https://reverent-shaw-d92da5.netlify.app//",
      logo: "/assets/baba_decoration.png", // add your logos
    },
  ]

  return (
    <section className="project-section">
      <motion.h1
        className="job-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="ProjectGrid">
          {projectDescription.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={process.env.PUBLIC_URL + project.logo}
                      alt={project.projectTitle}
                      className="companyLogo"
                    />
                  </a>
                </div>
                {/* Back: Job details */}
                <div className="flip-card-back glassContainer">
                  <p className="jobHeading">{project.projectTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
