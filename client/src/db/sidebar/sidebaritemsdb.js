import candlesIcon from '../../assets/icons/candles-icon.svg'
import homeIcon from '../../assets/icons/home-icon.svg'
import pawIcon from '../../assets/icons/paw-icon.svg'
import peopleIcon from '../../assets/icons/people-icon.svg'
import thoughtIcon from '../../assets/icons/thought-icon.svg'
import mapIcon from '../../assets/icons/map-icon.svg'
import cityIcon from '../../assets/icons/city-icon.svg'
import orgIcon from '../../assets/icons/org-icon.svg'
import bookIcon from '../../assets/icons/book-svg.svg'

export const sidebarItems = [
    {name: 'HOME', to:'/', icon:homeIcon},
    {name:'WORLD', to:'/world', icon:mapIcon},
    {name: 'CHARACTERS', to:'/characters', icon:peopleIcon},
    {name: 'GROUPS & ORGANIZATIONS', to:'/orgs', icon:orgIcon},
    {name: 'SPECIES', to:'/species', icon:pawIcon},
    {name: 'RELIGION', to:'/religion', icon:candlesIcon},
    {name: 'IDEOLOGIES', to:'/ideologies', icon:thoughtIcon},
    {name: 'DAILY LIFE', to:'/dailylife', icon:cityIcon},
    {name: 'LITERATURE', to:'/literature', icon:bookIcon}
]

/*const sidebarItems = [
    {
        name: 'HOME',
        icon: homeIcon,
        to: '/'
    },
    {
        name: 'WORLD',
        icon: mapIcon,
        subNavItems: [
            {
                subNavItemType: 'POLITICAL REGIONS',
                names: [
                    {name: 'NATIONS', to: '/nations'},
                    {name: 'SETTLEMENTS', to:'settlements'},
                    {name: 'ESTABLISHMENTS', to:'establishments'},
                    {name: 'POINTS OF INTEREST', to:'/poi'},          
            ]
        },
        {
            subNavItemType: 'GEOGRAPHICAL AREAS',
            names: [
                {name:'CELESTIAL REGIONS', to:'/celesregions'},
                {name: 'ISLES & ARCHIPELAGOES', to:'/isles'},
                {name: 'INTRAINSULAR REGIONS', to:'/intrainsulargeo'},
                {name: 'LANDMARKS', to:'/landmarks'}
            ]
        }
    ]
    },
    {
        name: 'CHARACTERS',
        icon: peopleIcon,
        subNavItems : [
            {
                names: [
                    {name: 'NPCS', to:'/npcs'},
                    {name: 'PLAYERS', to:'/playercharacters'}
            ]
            }
        ]
    },
    {
        name: 'SPECIES',
        icon: pawIcon,
        subNavItems : [
            {
                names: [
                    {name: 'FAUNA', to:'/fauna'},
                    {name: 'FLORA', to:'/flora'}
                ]
            }
        ]
    },
    {
        name: 'RELIGION',
        icon: candlesIcon,
        to: '/religion'
    },
    {
        name: 'DAILY LIFE',
        icon: cityIcon,
        subNavItems : [
            {
                names: [
                    {name: 'ITEMS & OBJECTS', to:'/objects'},
                    {name: 'RECREATIONAL ACTIVITIES', to:'/recreation}
                ]
            }
        ]
    }
]*/

