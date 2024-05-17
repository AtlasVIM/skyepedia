import filterIcon from '../assets/icons/filter-icon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select'

export default function GeneralPage(props) {

    const [search, setSearch] = useState('')
   const [filterStatus, setStatus] = useState(false)
    const [filteredItems, setFiltered] = useState(props.db)
    const [selectedFilters, setSelectedFilters] = useState({})
    
    useEffect(() => {
        setFiltered(props.db)
    }, [props.db])
    
            function filterBySelection() {
                     Object.keys(selectedFilters).forEach(filter => {
                      selectedFilters[filter].forEach((entry) => {
                        const arr = filteredItems.filter((item) => {
                            console.log(item[filter].includes(entry.value))
                            return item[filter].includes(entry.value)
                        })
                        setFiltered(arr)
                    })
                    })
            
            
            }
            

    function handleSelection(select, idx) {
        selectedFilters[idx] = select
        setSelectedFilters(selectedFilters)
        filterBySelection()
        
        if(!filterIsSelected()) {
            setFiltered(props.db)
        }
    }

    function filterIsSelected() {
        const lenArr = Object.keys(selectedFilters).map((arr) => selectedFilters[arr].length)
        const reducer = lenArr.reduce((acc, val) => acc +val, 0) 
        return reducer !== 0
    }


    return(

        <div className="general-page-wrapper">
            <div className="page-base">
                <div className="filters-wrapper">
                    
                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='search'></input>
                    <img alt={'filter icon'} src={filterIcon} onClick={() => setStatus(!filterStatus)}/>
                    {filterStatus && props.filters && Object.keys(props.filters).map((idx) => {
                        return (
                            <div>
                                <Select onChange={(selectedOption) => handleSelection(selectedOption, idx)} className='select-filter' options={props.filters[idx]} isMulti/>
                            </div>
                            )
                        })}
                        
                </div> 
                <div className="page-items">
                    {filteredItems?.filter((items) => {
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
