import damienShamrockCover from '../../assets/covers/damien_shamrock.png'

import { ga, gc, npc} from '../misc/vardb'


export const npcDB = [
    {
        name: 'Damien Shamrock',
        to:'damien_shamrock',
        cover: damienShamrockCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
        },
        quote: 'For a brighter tomorrow'
    }
]
