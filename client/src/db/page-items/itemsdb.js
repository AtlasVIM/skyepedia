import skyepediaCover from '../../assets/covers/skyepedia.png'
import koeCover from '../../assets/covers/koe.png'
import { gac } from '../misc/vardb'

export const itemsDB = [

    {
        name: 'Skyepedia Collectible Card Game',
        to: 'skyepedia',
        cover: skyepediaCover,
        md: 'items/skyepedia',
        quote: 'Not just a learning experience, a fun time for all!',
        tables: {
            category: [gac]
        }
    },
    {
        name: 'King of Explorers Fighting Game',
        to: 'koe',
        cover: koeCover,
        md: 'items/koe',
        quote: '*"Imagine the First Saint versus Lao Shen of Xene, how cool would that be."*',
        tables: {
            category: [gac]
        }
        
    }
]