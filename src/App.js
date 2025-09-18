import "./index.css"
import "./HomePage/sidePanel.css"
import ShootingStar from "./ShootingStar"
import HomeBody from "./HomePage/HomeBody.js"
import LeftSidePanel from "./HomePage/LeftSidePanel.js"
import RightSidePanel from "./HomePage/RightSidePanel.js"

function App() {
  return (
    <>
      <div className="App homeContainer">
        <div className="left-panel side-panel-left">
          <LeftSidePanel />
        </div>

        <div>
          <div className="content">
            <ShootingStar />
            <HomeBody />
          </div>
        </div>

        <div className="right-panel side-panel">
          <RightSidePanel />
        </div>
      </div>
    </>
  )
}

export default App
