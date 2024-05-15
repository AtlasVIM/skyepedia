import { Link, Route } from "react-router-dom";
import GeneralPage from "./GeneralPage";
import npcs  from '../assets/covers/npcs.png'
import pcs  from '../assets/covers/PCS.png'


export default function CharacterTypeIndex() {
    return(
        <div className="general-page-wrapper">

        <div className="page-base">

        <div className="char-idx">

            <Link to="npcs">
                    <img className='covers' src={npcs}/>
            </Link>
            <Link to="players">
                    <img className='covers' src={pcs}/>
            </Link>
        </div>
        </div>
        </div>
    )
}