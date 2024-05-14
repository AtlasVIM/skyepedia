import WorldFilters from "../components/filters/WorldFilters";
import filterIcon from '../assets/icons/filter-icon.svg';
import { useEffect } from "react";

export default function GeneralPage(props) {

    useEffect(() => {
        fetch('/items').then(response => {
            response.json().then(items => {
                console.log(items)
            })
        })
    }, [])

    return(

        <div className="general-page-wrapper">
            <div className="page-base">
                <div className="filters-wrapper">
                    <input placeholder='search'></input>
                    <img src={filterIcon}></img>
                </div>
                <div className="page-items">
                    {props.itemsComponent}
                </div>
            </div>
        </div>
    )
}