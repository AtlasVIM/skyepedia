import { useState } from "react"
import candlesIcon from '../assets/icons/candles-icon.svg'
import homeIcon from '../assets/icons/home-icon.svg'
import pawIcon from '../assets/icons/paw-icon.svg'
import peopleIcon from '../assets/icons/people-icon.svg'
import thoughtIcon from '../assets/icons/thought-icon.svg'
import mapIcon from '../assets/icons/map-icon.svg'
import cityIcon from '../assets/icons/city-icon.svg'
import encyclopedia from '../assets/icons/encyclopedia.ico'
import SidebarItem from "./SidebarItem"

export default function Sidebar(props) {

const [inactive, setInactive] = useState(true)

    return(
        <div className={`sidebar ${inactive? 'inactive' : ''}`}>
        <div className="sidebar-top">
            <div className="toggle-icon" onClick={() => setInactive(!inactive)}>
                <img src={encyclopedia} alt="Toggle navigation bar button"/>
            </div>
        </div>

        {!inactive && <div className="searchbar">
            <input type="text" placeholder="search"/>
        </div> }

        <div className="dividing-line"></div>
        {!inactive && <div className="sidebar-navigation">
            <ul>
                <SidebarItem name='HOME' icon={homeIcon}/>
                <SidebarItem name='WORLD' icon={mapIcon} subMenus={[
                    {subMenusType : 'POLITICAL REGIONS',
                        names : [
                            {name: 'NATIONS'},
                            {name: 'SETTLEMENTS'},
                            {name: 'ESTABLISHMENTS'},
                            {name: 'POINTS OF INTEREST'}
                        ]
                    },
                    {subMenusType : 'GEOGRAPHICAL AREA',
                    names : [
                        {name: 'CELESTIAL REGIONS'},
                        {name: 'ISLES & ARCHIPELAGOES'},
                        {name: 'INTRAINSULAR AREAS'},
                        {name: 'LANDMARKS'}
                    ]}
                ]}
                />
                <SidebarItem name='CHARACTERS' icon={peopleIcon} subMenus={[
                    {names: [
                        {name: ' NPCS'},
                        {name: 'PLAYERS'}
                    ]}
                ]}/>
                <SidebarItem name='SPECIES' icon={pawIcon} subMenus={[
                    {names: [
                        {name:'FAUNA'},
                        {name:'PLAYERS'}
                    ]}
                ]}/>
                <SidebarItem name='DEITIES & SAINTS' icon={candlesIcon}/>
                <SidebarItem name='IDEOLOGY' icon={thoughtIcon} subMenus={[
                    {names:[
                        {name:'POLITICS'},
                        {name:'PHILOSOPHY'}
                    ]}
                ]}/>
                <SidebarItem name='DAILY LIFE' icon={cityIcon} subMenus={[
                    {names:[
                        {name:'ITEMS & INVENTIONS'},
                        {name: 'RECREATIVE ACTIVITIES'}
                    ]}
                ]}
                />
            </ul>
        </div> }
        </div>
    )
}