import greenWyvernRiverCover from '../../assets/covers/green_wyvern.png'

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
        quote: '"Fearsome... and capable of overwhelming an inexperienced crew... Surprisingly tasty"'
    }
]