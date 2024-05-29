//COVERS
import ruinCover from '../../assets/covers/ruin.png'
import revolutionCover from '../../assets/covers/mekhanes.png'

//POLAROIDS
import leviUPolaroid from '../../assets/polaroids/HISTORY_TEMPLATE.png'

//TABLES

//MARKDOWN CONTENT


import { gc, major, saint } from '../misc/vardb'

export const religionDB = [
    {
        name: 'The Revolution',
        to: 'revolution',
        cover: revolutionCover,
        tables: {
        celestialRegion: [gc],
        type: [major, saint],
        },
        polaroids: {
            history: leviUPolaroid,
        },
        quote: '"The Saint in the machine, the mark of change" - Mekhanes worshipper'
    },
    {
        name: 'The Ruin',
        to: 'ruin',
        cover: ruinCover,
        tables: {
        celestialRegion: [gc],
        type: [major],
        },
        polaroids: {
            history: leviUPolaroid,
        },
        quote: '"Ruin is not something you fear, but something you respect" -Emir Yusuf of Al-Zabaj'
    },
]