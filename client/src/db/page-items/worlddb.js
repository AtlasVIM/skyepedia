
//COVERS
import leviCover from '../../assets/covers/leviu.png'
import museumCover from '../../assets/covers/leviumuseum.png'
import guidiviereCover from '../../assets/covers/guidiviere.png'
import mountPicotCover from '../../assets/covers/mount_picot.png'
import sobrazulCover from '../../assets/covers/sobrazul_isle.png'

//TABLES

//MARKDOWN CONTENT


import { gc, nna, pa, est, gr, lm, ga } from '../misc/vardb'

export const worldDB = [
    {
        name: 'Leviathan University',
        to: 'leviathan_university',
        cover: leviCover,
        tables: {
            category: [pa],
            dimension: [nna],
            celestialRegion: [gc],
        },
        md:'leviathan-university',
        quote: '*"The place that holds the future of our world "* - Bobber Otterson'

    },
    {
        name: 'Leviathan University\'s Museum of Curiosities',
        to: 'leviathan_university_museum_of_curiosities',
        cover: museumCover,
        tables: {
        category:[pa],
        dimension: [est],
        celestialRegion: [gc],
    },
        md: 'leviathan-university-museum-of-curiosities',
        quote: '*"This place really holds the beauty of living in such a magical world"* - Idris Yashanti'
    },
    {
        name: 'Guidivière',
        to: 'guidiviere',
        cover: guidiviereCover,
        tables: {
        category:[pa],
        dimension: [nna],
        celestialRegion: [gc],
        },
        md: 'guidiviere',
        quote: '*"Oh nation of rivers of gold, how gilded is your heart."*  -Odessipus, The Poet'

    },
    {
        name: 'Mount Picot',
        to: 'mount-picot',
        cover: mountPicotCover,
        tables: {
        category:[ga],
        dimension: [lm],
        celestialRegion: [gc],
        },
        md: 'mount-picot',
        quote: 'More adventurous students love to come here, almost all of them come back'

    },
    {
        name: 'Sobr\'azul Isle',
        to: 'sobrazul-isle',
        cover: sobrazulCover,
        tables: {
        category:[ga],
        dimension: [gr],
        celestialRegion: [gc],
        },
        md: 'sobrazul-isle',
        quote: 'Over the blue waters of Leviathan River, the lonely isle'

    },
    
]