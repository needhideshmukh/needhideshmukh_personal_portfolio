import AboutMe from "../HomePage/AboutMe"
import Jobs from "../HomePage/Jobs.js"
import Projects from "../HomePage/Projects.js"
import Footer from "../HomePage/Footer.js"

function HomeBody() {
  return (
    <>
      <div className="homeBodyContainer">
        <AboutMe />
        <Jobs />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default HomeBody
