import LeftPanel from "./Components/LeftPanel"
import RightPanel from "./Components/RightPanel"
import "./styles/App.css"
import "./styles/mediaQuery.css"

function App(){
  return(
    <div className="panel-container">
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </div>
  )
}

export default App
