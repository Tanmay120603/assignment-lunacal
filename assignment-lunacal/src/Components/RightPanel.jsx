import GalleryWidget from "./GalleryWidget"
import "../styles/rightPanel.css"
import TabWidget from "./TabWidget"
function RightPanel(){
    return(
        <div className="right-panel-container">
            <TabWidget></TabWidget>
            <div className="horizontal-line"></div>
            <GalleryWidget></GalleryWidget>
            <div className="horizontal-line"></div>
        </div>
    )
}

export default RightPanel