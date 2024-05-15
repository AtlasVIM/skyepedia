import filterIcon from '../assets/icons/filter-icon.svg';
import { worldDB } from '../db/pageitemsdb';
import { Link, Route, Routes } from 'react-router-dom';


export default function GeneralPage(props) {

    /*useEffect(() => {
        fetch('/items').then(response => {
            response.json().then(items => {
                console.log(items)
            })
        })
    }, [])*/

    return(

        <div className="general-page-wrapper">
            <div className="page-base">
                {props.filters && <div className="filters-wrapper">
                    <input placeholder='search'></input>
                    <img src={filterIcon}></img>
                </div> }
                <div className="page-items">
                    {worldDB.map((entries) => {
                        return(<div>
                        
                        <Link to={entries.to}>
                        <img className='covers' src={entries.cover}/>
                        </Link>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}