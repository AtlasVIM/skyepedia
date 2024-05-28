import { useState } from "react"
import encyclopedia from '../assets/icons/encyclopedia.ico'
import SidebarItem from "./SidebarItem"
import { sidebarItems } from "../db/sidebar/sidebaritemsdb"



export default function Sidebar() {

const [inactive, setInactive] = useState(true)

    return(
        <div className={`sidebar ${inactive? 'inactive' : ''}`} onMouseLeave={() => setInactive(true)}>
        <div className="sidebar-top">
            <div className="toggle-icon" onClick={() => setInactive(!inactive)}>
                <img src={encyclopedia} alt="Toggle navigation bar button"/>
            </div>
        </div>

      {/*  {!inactive && <div className="searchbar">
            <input type="text" placeholder="search"/>
        </div> }*/ }

        <div className="dividing-line"></div>
        {!inactive && <div className="sidebar-navigation">
            <ul>

                {sidebarItems.map((item, index) => (
                    <SidebarItem name = {item.name} icon = {item.icon} to = {item.to} key ={index}/>
                ))}

            </ul>
        </div> }
        </div>
    )
}