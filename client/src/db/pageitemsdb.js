import leviCover from '../assets/covers/leviu.png'
import honkshuCover from '../assets/covers/honkshu.png'
import WorldIntroduction from '../components/page-components/world/WorldIntroduction'
import WorldHistory from '../components/page-components/world/WorldHistory'

export const worldDB = [
    {
        name: 'Leviathan University',
        to: 'leviathan_university',
        cover: leviCover,
        elements: [<WorldIntroduction/>, <WorldHistory/>]
    },
    {
        name: 'Honkshu',
        to: 'honkshu',
        cover: honkshuCover,
        elements: [<WorldIntroduction/>]
    }
]

