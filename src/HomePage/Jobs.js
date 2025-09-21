import React from "react"
import { motion } from "framer-motion"
import "./BodyStyle.css"

const Jobs = () => {
  const jobDescription = [
    {
      jobTitle: "Project Management Apprentice",
      company: "Google",
      startEndDate: "March 2024 - Present",
      logo: "/assets/Google_2015_logo.svg.webp", // add your logos
    },
    {
      jobTitle: "Associate Software Engineer",
      company: "Accenture",
      startEndDate: "August 2023 – March 2024",
      logo: "/assets/Accenture.png",
    },
    {
      jobTitle: "Graduate Engineering Trainee",
      company: "Mintbagg",
      startEndDate: "February 2023 – April 2023",
      logo: "/assets/chronocure.png",
    },
    {
      jobTitle: "Content Writer",
      company: "BdigitaU",
      startEndDate: "May 2021 – September 2021",
      logo: "/assets/bdigitau-logo.png",
    },
  ]

  return (
    <section className="job-section">
      <motion.h1
        className="job-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Experience
      </motion.h1>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="jobGrid">
          {jobDescription.map((job, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                {/* Front: Company logo */}
                <div className="flip-card-front">
                  <img
                    src={process.env.PUBLIC_URL + job.logo}
                    alt={job.company}
                    className="companyLogo"
                  />
                </div>
                {/* Back: Job details */}
                <div className="flip-card-back glassContainer">
                  <p className="jobHeading">{job.jobTitle}</p>
                  <i className="companyName">{job.company}</i>
                  <p className="startDate">{job.startEndDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Jobs
