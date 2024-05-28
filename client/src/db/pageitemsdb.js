//COVERS
import leviCover from '../assets/covers/leviu.png'
import ruinCover from '../assets/covers/ruin.png'
import museumCover from '../assets/covers/leviumuseum.png'
import revolutionCover from '../assets/covers/mekhanes.png'
import greenWyvernRiverCover from '../assets/covers/green_wyvern.png'
import guidiviereCover from '../assets/covers/guidiviere.png'

//POLAROIDS
import leviUPolaroid from '../assets/polaroids/HISTORY_TEMPLATE.png'

//TABLES

//MARKDOWN CONTENT


import { ga, gc, ina, nna, pa, est, major, saint } from './vardb'

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
        quote: '"*No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.*" **-Suuuu**'

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
        quote: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. -Suuuu'
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
        quote: '*"Oh nation of rivers of gold, how gilded is your heart."*  -Odessipus, The Poet'

    }
]

export const npcDB = [
    {
        name: 'Damien Shamrock',
        to:'damien_shamrock',
        cover: '',
        celestialRegion: [gc],
        type: ['npc'],
        polaroids: {
            history: leviUPolaroid,
        },
        quote: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. -Suuuu'
    }
]

export const speciesDB = [
    {
        name: 'Eastern Spine Frog',
        to: 'eastern_spine_frog',
        cover: greenWyvernRiverCover,
        celestialRegion: [gc],
        type: ['fauna'],
        polaroids: {
            history: leviUPolaroid,
        },
        quote: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. -Suuuu'
    },
    {
        name: 'Green Wyvern of the Rivers',
        to:'green_wyvern_rivers',
        cover: greenWyvernRiverCover,
        celestialRegion: [gc],
        type: ['fauna'],
        polaroids: {
            history: leviUPolaroid,
        },
        quote: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. -Suuuu'
    }
]

export const religionDB = [
    {
        name: 'The Revolution',
        to: 'revolution',
        cover: revolutionCover,
        celestialRegion: [gc],
        type: [major, saint],
        polaroids: {
            history: leviUPolaroid,
        },
        quote: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. -Suuuu'
    },
    {
        name: 'The Ruin',
        to: 'ruin',
        cover: ruinCover,
        celestialRegion: [gc],
        type: [major],
        polaroids: {
            history: leviUPolaroid,
        },
        quote: 'No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. -Suuuu'
    },
]