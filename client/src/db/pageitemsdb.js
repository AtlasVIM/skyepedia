import leviCover from '../assets/covers/leviu.png'
import honkshuCover from '../assets/covers/honkshu.png'
import ruinCover from '../assets/covers/ruin.png'
import museumCover from '../assets/covers/leviumuseum.png'
import revolutionCover from '../assets/covers/mekhanes.png'
import WorldIntroduction from '../components/page-components/world/WorldIntroduction'
import WorldHistory from '../components/page-components/world/WorldHistory'
import { ga, gc, ina, nna, pa, est } from './vardb'

export const worldDB = [
    {
        name: 'Leviathan University',
        to: 'leviathan_university',
        cover: leviCover,
        category: [pa],
        dimension: [nna],
        celestialRegion: [gc],
        elements: [<WorldIntroduction/>, <WorldHistory/>],
    },
    {
        name: 'Leviathan University\'s Museum of Curiosities',
        to: 'leviathan_university_museum_of_curiosities',
        cover: museumCover,
        category:[pa],
        dimension: [est],
        celestialRegion: [gc],
        elements: [<WorldIntroduction/>],
    }
]

export const npcDB = [
    {
        name: 'Damien Shamrock',
        to:'damien_shamrock',
        cover: '',
        celestialRegion: [gc],
        type: ['npc']
    }
]

export const speciesDB = [
    {
        name: 'Eastern Spine Frog',
        to: 'eastern_spine_frog',
        cover: '',
        celestialRegion: [gc],
        type: ['fauna']
    },
    {
        name: 'Green Wyvern of the Rivers',
        to:'green_wyvern_rivers',
        cover: '',
        celestialRegion: [gc],
        type: ['fauna']
    }
]

export const religionDB = [
    {
        name: 'The Revolution',
        to: 'revolution',
        cover: revolutionCover,
        celestialRegion: [gc],
        type: ['major', 'saint']
    },
    {
        name: 'The Ruin',
        to: 'ruin',
        cover: ruinCover,
        celestialRegion: [gc],
        type: ['major']
    },
]