import { Link } from "react-router-dom";
import npcs  from '../assets/covers/npcs.png'
import pcs  from '../assets/covers/PCS.png'


export default function CharacterTypeIndex() {
    return(
        <div className="general-page-wrapper">


        <div className="char-idx">

            <Link to="npcs">
                    <img className='covers' alt="NPC's" src={npcs}/>
            </Link>
            <Link to="players">
                    <img className='covers' alt="Player Characters" src={pcs}/>
            </Link>
        </div>
        </div>
    )
}