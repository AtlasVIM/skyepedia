import filterIcon from '../assets/icons/filter-icon.svg';
import { worldDB } from '../db/pageitemsdb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import WorldDetailsPage from './WorldDetailsPage';

export default function GeneralPage(props) {

    const {db} = props
    const [search, setSearch] = useState('')

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
                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='search'></input>
                    <img src={filterIcon}></img>
                </div> }
                <div className="page-items">
                    {db && db.filter((items) => {
                        if(search !== '' || search != null) {
                            return items.name.toLowerCase().includes(search)
                        }
                    }).map((entries) => {
                        return(
                        <Link to={entries.to}>
                        <img className='covers' src={entries.cover}/>
                        </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}