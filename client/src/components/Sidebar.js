import { useState } from "react"

export default function Sidebar(props) {

const [isOpened, setOpened] = useState(false)

    return(
       <div className="sidebar-wrapper">
        {!isOpened && <img className="sidebar-icon" src="threebars.png"></img>}
       {isOpened && <div className="sidebar">
            <ul>
                <li><img src=""></img>HOME</li>
                <li></li>
            </ul>
        </div>}
       </div> 
    )
}