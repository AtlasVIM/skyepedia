import candlesIcon from '../../assets/icons/candles-icon.svg'
import homeIcon from '../../assets/icons/home-icon.svg'
import pawIcon from '../../assets/icons/paw-icon.svg'
import peopleIcon from '../../assets/icons/people-icon.svg'
import thoughtIcon from '../../assets/icons/thought-icon.svg'
import mapIcon from '../../assets/icons/map-icon.svg'
import cityIcon from '../../assets/icons/city-icon.svg'
import orgIcon from '../../assets/icons/org-icon.svg'
import bookIcon from '../../assets/icons/book-svg.svg'
import itemIcon from '../../assets/icons/sack-icon.svg'

export const sidebarItems = [
    {name: 'HOME', to:'/', icon:homeIcon},
    {name:'WORLD', to:'/world', icon:mapIcon},
    {name: 'CHARACTERS', to:'/characters', icon:peopleIcon},
    {name: 'GROUPS & ORGANIZATIONS', to:'/orgs', icon:orgIcon},
    {name: 'SPECIES', to:'/species', icon:pawIcon},
    {name: 'RELIGION', to:'/religion', icon:candlesIcon},
    {name: 'IDEOLOGIES', to:'/ideologies', icon:thoughtIcon},
    {name: 'DAILY LIFE', to:'/dailylife', icon:cityIcon},
    {name: 'LITERATURE', to:'/literature', icon:bookIcon},
    {name: 'OBJECTS, ITEMS & INVENTIONS', to:'/items', icon:itemIcon}
]
