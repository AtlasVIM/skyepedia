import bookBG from '../../../assets/openbookbg.png'
import { FlipCard } from '../FlipCard'
import ReactMarkdown from 'react-markdown'

export default function DetailsIntroduction(props) {

    const entry = props.props

     return(
        <div className='details-intro-wrapper'>
            <div className='book-bg-intro' style={{backgroundImage: `url(${bookBG})`}}>
            <FlipCard props={entry}/>
            <ReactMarkdown className='intro-content jacquard-12-regular'>
            {entry.quote}
            </ReactMarkdown>
            </div>
        </div>
     )
}