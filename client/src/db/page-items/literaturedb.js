import calendarCover from '../../assets/covers/grand_cumulian_calendar.png'
import gcGodsCover from '../../assets/covers/on_grand_cumulian_gods.png'
//
import { book, note } from '../misc/vardb'


export const literatureDB = [

    {
        name: 'Grand Cumulian Calendar',
        to: 'grand-cumulus-calendar',
        cover: calendarCover,
        md: 'literature/grand-cumulian-calendar',
        quote: '',
        tables: {
            category: [note]
        }
    },
    {
        name: 'On Grand Cumulian Gods',
        to: 'grand-cumulian-gods',
        cover: gcGodsCover,
        md: 'literature/on-grand-cumulian-gods',
        quote: '"If you are a person with strong convictions or passions then look to the stars, find your guiding lights and one day the stars shall bless your path."',
        tables: {
            category: [book],
            author: ['Jason Thamstedt'] 
        }
    },
]