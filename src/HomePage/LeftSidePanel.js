/* eslint-disable react/style-prop-object */
// src/LeftSidePanel.js
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFirstdraft,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import "./sidePanel.css"

const LeftSidePanel = (props) => {
  return (
    <div className=" left-panel ">
      <div className="vertical-text-left">
        <div className="witeLine2">
          <a
            className="icon-link"
            href="https://github.com/needhideshmukh"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="GitHub"
          >
            <FontAwesomeIcon
              className="ctaIcons"
              size="2x"
              style={{ color: "#39ea39" }}
              icon={faGithub}
            />
          </a>

          <a
            className="icon-link"
            href="https://www.linkedin.com/in/needhideshmukh/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="LinkedIn"
          >
            <FontAwesomeIcon
              className="ctaIcons"
              size="2x"
              style={{ color: "#39ea39" }}
              icon={faLinkedinIn}
            />
          </a>
          <a
            className="icon-link"
            href="https://drive.google.com/file/d/1NRQ4aUJKpwWIUvxntH417qjTkD0Xyne-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="Resume"
          >
            <FontAwesomeIcon
              className="ctaIcons"
              icon={faFirstdraft}
              size="2x"
              style={{ color: "#39ea39" }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default LeftSidePanel
