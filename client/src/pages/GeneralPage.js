import WorldFilters from "../components/filters/WorldFilters";
import filterIcon from '../assets/icons/filter-icon.svg';

export default function GeneralPage(props) {


    return(

        <div className="general-page-wrapper">
            <div className="page-base">
            <div className="dividing-line-page"></div>
                <div className="page-items">
                    aaaaaaaa
                    {props.itemsComponent}
                </div>
                <div className="filters-wrapper">
                    <img src={filterIcon}></img>
                </div>
            </div>
        </div>
    )
}