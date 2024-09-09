import damienShamrockCover from '../../assets/covers/damien_shamrock.png'
import vascoRepresasCover from '../../assets/covers/vasco_represas.png'
import idrisYashantiCover from '../../assets/covers/idris_yashanti.png'
import wujinLeeCover from '../../assets/covers/wujin_lee.png'
import elaineIzinskiCover from '../../assets/covers/elaine_izinski.png'

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
    },
    {
        name: 'Vasco Represas',
        to:'vasco_represas',
        cover: vascoRepresasCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            group: 'Skaterboyz'
        },
        quote: '"Woah, radical, dude."'
    },
    {
        name: 'Idris Yashanti',
        to:'idris_yashanti',
        cover: idrisYashantiCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            group: ['Leviathan University Faculty'],
            sexuality: ['Homossexual']
        },
        quote: 'Mystery brings curiosity. Curiosity brings knowledge. Knowledge brings power.'
    },
    {
        name: 'Wu-Jin Lee',
        to:'wujin_lee',
        cover: wujinLeeCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            group: ['Skaterboyz']
        },
        quote: '"Bad ideas don\'t exist, only unique experiences."'
    },
    {
        name: 'Elaine Izinski',
        to:'elaine_izinski',
        md: 'npcs/elaine-izinski',
        cover: elaineIzinskiCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            birth: ['4th of Isoles, 80 R.E.'],
            gender: ['Female'],
            Sexuality: ['Homossexual'],
            Height:['1,59m'],
            Eyes:['Black'],
            Hair: ['Pink'],
            Occupations: ['Student'],
            Reasoning: ['Ethos'],
            Reaction: ['Fight']

            
        },
        quote: '"Flowers bloom for you."'
    },


]
