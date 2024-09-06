import { Fragment, useState } from "react"
import {tabsInfoArr} from "../utils/constant"
import questionMark from "../assests/questionMark.png"
import sidebox from "../assests/sidebox.png"
import "../styles/tabWidget.css"

function TabWidget(){
    const [activeTabId,setActiveTabId]=useState(tabsInfoArr[0].id)
    return(
        <div className="tab-container">
            <div className="tab-header">
            <img src={questionMark} alt="question-image" className="question-img"/>
            {tabsInfoArr.map(tabInfo=><div onClick={()=>setActiveTabId(tabInfo.id)} key={tabInfo.id} className={tabInfo.id===activeTabId ? "activeTab tab" : "tab"}>
            <a>{tabInfo.name}</a>
        </div>)}
        </div>
        <div className="tab-content">
            <img src={sidebox} alt="sidebox-image" className="sidebox-img"/>
            {tabsInfoArr.map(tabInfo=>tabInfo.id===activeTabId ?<Fragment key={tabInfo.id}>
                <p className="content-header">{tabInfo.content?.head}</p>
                <p className="content-body">{tabInfo.content?.body}</p>
                <p className="content-end">{tabInfo.content?.end}</p>
                </Fragment>: null )}
        </div>
        </div>
    )
}

export default TabWidget