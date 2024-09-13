import damienShamrockCover from '../../assets/covers/damien_shamrock.png'
import vascoRepresasCover from '../../assets/covers/vasco_represas.png'
import idrisYashantiCover from '../../assets/covers/idris_yashanti.png'
import wujinLeeCover from '../../assets/covers/wujin_lee.png'
import elaineIzinskiCover from '../../assets/covers/elaine_izinski.png'
import blairAlexanderCover from '../../assets/covers/blair_alexander.png'
import francescoBorgeauxCover from '../../assets/covers/francesco_borgeaux.png'
import aegonCallaghanCover from '../../assets/covers/aegon_callaghan.png'

import { ga, gc, npc} from '../misc/vardb'


export const npcDB = [
    {
        name: 'Damien Shamrock',
        to:'damien_shamrock',
        cover: damienShamrockCover,
        tables :{
            type: [npc],
            celestialRegion: [gc],
            alias: ['Prof Damien'],
            birth: ['17th of Ficsam, 65 R.E.'],
            height: ['1,72m'],
            Eyes:['Black'],
            Hair: ['Black and curly'],
            affiliation: ['Leviathan University Faculty'],
            familly: ['?'],
            occupation: ['Teacher', 'Handyman'],
            reasoning: ['Ethos'],
            reaction: ['Fight']
        },
        quote: '"For a brighter tomorrow"',
        md: 'npcs/damien-shamrock'
    },
    {
        name: 'Vasco Represas',
        to:'vasco_represas',
        cover: vascoRepresasCover,
        tables :{
            type: [npc],
            celestialRegion: [gc],
            alias: ['Presas'],
            birth: ['79 R.E.'],
            height: ['1,86m'],
            Eyes:['Black'],
            Hair: ['Shark'],
            affiliation: ['Skaterboyz'],
            occupation: ['Student'],
            reasoning: ['Pathos'],
            reaction: ['Fight']
        },
        quote: '"Woah, radical, dude."',
        md:'npcs/vasco-represas'
    },
    {
        name: 'Idris Yashanti',
        to:'idris_yashanti',
        cover: idrisYashantiCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            alias: ['Dris'],
            birth: ['?'],
            height: ['1,80m'],
            Eyes:['Brown'],
            Hair: ['Black and curly'],
            affiliation: ['Leviathan University Faculty'],
            familly: ['?'],
            occupation: ['Librarian'],
            reasoning: ['Logos'],
            reaction: ['Flight']
        },
        quote: 'One cannot be wise if they\'re not curious.',
        md:'npcs/idris-yashanti'
    },
    {
        name: 'Wu-Jin Lee',
        to:'wujin_lee',
        cover: wujinLeeCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            alias: ['Lee'],
            birth: ['?'],
            height: ['1,94m'],
            Eyes:['Black'],
            Hair: ['Toasty gold with spots of white'],
            affiliation: ['Skaterboyz'],
            familly: ['?'],
            occupation: ['Student'],
            reasoning: ['Pathos'],
            reaction: ['Flight']
        },
        quote: '"Bad ideas don\'t exist, only unique experiences."',
        md:'npcs/wu-jin-lee'
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
            Height:['1,59m'],
            Eyes:['Black'],
            Hair: ['Pink'],
            Occupations: ['Student'],
            Reasoning: ['Ethos'],
            Reaction: ['Fight']

            
        },
        quote: '"Flowers bloom for you."'
    },
    {
        name: 'Francesco Borgeaux',
        to:'francesco_borgeaux',
        cover: francescoBorgeauxCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            alias: ['Chico'],
            birth: ['?'],
            height: ['1,60m'],
            Eyes:['Brown'],
            Hair: ['Bald'],
            affiliation: ['Leviathan University Festivities\' Comission'],
            occupation: ['?'],
            reasoning: ['Pathos'],
            reaction: ['Flight']
        },
        quote: '"Let\'s get this party started!"',
        md: 'npcs/francesco-borgeaux'
    },
    {
        name: 'Blair Alexander',
        to:'blair_alexander',
        cover: blairAlexanderCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            alias: ['Blair'],
            birth: ['?'],
            height: ['1,69m'],
            Eyes:['Black'],
            Hair: ['Black'],
            characteristics:['Wears a silver armor most of the time'],
            affiliation: ['Leviathan University\'s Student Council'],
            occupation: ['Student'],
            reasoning: ['Ethos'],
            reaction: ['Fight']
        },
        quote: '"All shall be judged."',
        md: 'npcs/blair-alexander'
    },
    {
        name: 'Aegon Callaghan',
        to:'aegon_callaghan',
        cover: aegonCallaghanCover,
        tables :{
            celestialRegion: [gc],
            type: [npc],
            alias: ['Gon', 'Mr. Callaghan'],
            birth: ['?'],
            height: ['1,74m'],
            Eyes:['Dark Blue'],
            Hair: ['Reddish Scales'],
            affiliation: ['Leviathan University\'s Student Council'],
            familly: ['?'],
            occupation: ['Student','Student Council President'],
            reasoning: ['Logos'],
            reaction: ['Freeze']
        },
        quote: '"Excellence, nothing less."',
        md:'npcs/aegon-callaghan'
    },




]
