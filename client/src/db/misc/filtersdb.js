import { cr, est, ga, gc, gr, ina, lm, nna, pa, poi, sett, gn, saint, minor, major, fau, flo, note, gac } from "./vardb";

/*export const worldFilters =
    [
        ['all categories', pa, ga],
        ['all dimensions', cr, est, gr, ina , lm, nna, poi, sett],
        ['all celestial regions', gc]
    ] 
      */
export const worldFilters = 
{

    category: [
        {value:pa, label:pa.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:ga, label:ga.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ],
    dimension: [
        {value:cr, label:cr.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:est, label:est.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:gr, label:gr.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:ina, label:ina.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:lm, label:lm.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:nna, label:nna.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:poi, label:poi.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:sett, label:sett.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        
    ],
    celestialRegion:    [
        
        {value:gc, label:gc.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:gn, label:gn.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ]

}


export const religionFilters = {
    celestialRegion: [
        {value:gc, label:gc.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:gn, label:gn.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ],
    type: [
        {value:major, label:major.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:minor, label:minor.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:saint, label:saint.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ]
}

export const speciesFilters = {
    celestialRegion: [
        {value:gc, label:gc.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:gn, label:gn.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ],
    type: [
        {value:fau, label:fau.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:flo, label:flo.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ]
}


export const literatureFilter = {
    category: [
        {value: note, label:note.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ]
}

export const itemFilter = {
    category: [
        {value: gac, label:gac.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ]

}

export const npcsFilter = {
    celestialRegion: [
        {value:gc, label:gc.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
        {value:gn, label:gn.split(' ').map((word) => {return word[0].toUpperCase() + word.substring(1)}).join(' ')},
    ],
    
}