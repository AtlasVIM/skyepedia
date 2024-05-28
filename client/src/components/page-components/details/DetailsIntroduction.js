import bookBG from '../../../assets/openbookbg.png'
import { FlipCard } from '../FlipCard'
import Markdown from 'markdown-to-jsx'

export default function DetailsIntroduction(props) {

    const entry = props.props

     return(
        <div className='details-intro-wrapper'>
            <div className='book-bg-intro' style={{backgroundImage: `url(${bookBG})`}}>
            <FlipCard props={entry}/>
                <Markdown className='intro-content jacquard-12-regular'>
                    {entry.quote}
                </Markdown>
            </div>
        </div>
     )
}