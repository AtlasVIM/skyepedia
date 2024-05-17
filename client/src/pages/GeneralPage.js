import filterIcon from '../assets/icons/filter-icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select'

export default function GeneralPage(props) {

    const [search, setSearch] = useState('')
   // const [filterStatus, setStatus] = useState(false)
    const [filteredItems, setFiltered] = useState(props.db)
    const [selectedFilters, setSelectedFilters] = useState({})
    const [filterArr, setArr] = useState([])
    
    function handleSelection(select, idx) {
        selectedFilters[idx] = select
        setSelectedFilters(selectedFilters)
        for(const key in selectedFilters) {
            
            selectedFilters[key].map((obj) => {''})
            }
            console.log(filterArr)
    }

    return(

        <div className="general-page-wrapper">
            <div className="page-base">
                <div className="filters-wrapper">
                    
                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='search'></input>
                        {props.filters && props.filters.map((select, idx) => {
                             return (
                                <div>
                                    <Select onChange={(selectedOption) => handleSelection(selectedOption,idx)} className='select-filter' options={select} isMulti/>
                                </div>
                            )
                        })}
                    
                </div> 
                <div className="page-items">
                    {props.db && props.db
                    .filter((item) => {
                        console.log(filterArr)
                        if(filterArr.length > 0){

                            item.filters.map(
                                (filter) => {
                                    console.log(filterArr, filter, item)
                                    if(filterArr.includes(filter)){
                                        console.log(filter, item)
                                        return item
                                    } 
                                })  
                            }
                        })
                    .filter((items) => {
                       if(search !== '' || search != null) {
                            return items.name.toLowerCase().includes(search.toLowerCase())
                        }
                        return items       
                    })
                    .sort(function(a, b){
                        if(a.name < b.name){
                            return -1
                        }
                        if(a.name > b.name){
                            return 1
                        }
                        return 0
                    })
                    .map((entries) => {
                        return(
                        <Link to={entries.to}>
                        <img className='covers' alt={entries.name} src={entries.cover}/>
                        </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
