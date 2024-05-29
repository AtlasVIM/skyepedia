import greenWyvernRiverCover from '../../assets/covers/green_wyvern.png'

//POLAROIDS
import leviUPolaroid from '../../assets/polaroids/HISTORY_TEMPLATE.png'

//TABLES

//MARKDOWN CONTENT


import { fau, gc} from '../misc/vardb'



export const speciesDB = [
    {
        name: 'Green Wyvern of the Rivers',
        to:'green_wyvern_rivers',
        cover: greenWyvernRiverCover,
        tables: {
        celestialRegion: [gc],
        type: [fau],
        },
        polaroids: {
            history: leviUPolaroid,
        },
        quote: '"Fearsome... and capable of overwhelming an inexperienced crew... Surprisingly tasty"'
    }
]