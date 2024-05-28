
//COVERS
import leviCover from '../../assets/covers/leviu.png'
import museumCover from '../../assets/covers/leviumuseum.png'
import guidiviereCover from '../../assets/covers/guidiviere.png'

//POLAROIDS
import leviUPolaroid from '../../assets/polaroids/HISTORY_TEMPLATE.png'

//TABLES

//MARKDOWN CONTENT


import { gc, nna, pa, est } from '../misc/vardb'

export const worldDB = [
    {
        name: 'Leviathan University',
        to: 'leviathan_university',
        cover: leviCover,
        category: [pa],
        dimension: [nna],
        celestialRegion: [gc],
        polaroids: {
            history: leviUPolaroid,
        },
        md:'leviathan-university',
        elements: ['intro'],
        quote: '*"The place that holds the future of our world "* - Bobber Otterson'

    },
    {
        name: 'Leviathan University\'s Museum of Curiosities',
        to: 'leviathan_university_museum_of_curiosities',
        cover: museumCover,
        category:[pa],
        dimension: [est],
        celestialRegion: [gc],
        polaroids: {
            history: leviUPolaroid,
        },
        md: 'leviathan-university-museum-of-curiosities',
        elements: ['intro'],
        quote: '*"This place really holds the beauty of living in such a magical world"* - Idris Yashanti'
    },
    {
        name: 'Guidivière',
        to: 'guidiviere',
        cover: guidiviereCover,
        category:[pa],
        dimension: [nna],
        celestialRegion: [gc],
        polaroids: {
            history: leviUPolaroid,
        },
        md: 'guidiviere',
        elements: ['intro', 'history'],
        quote: '*"Oh nation of rivers of gold, how gilded is your heart."*  -Odessipus, The Poet'

    }
]