import {useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import MarkDown from 'markdown-to-jsx'
import { FlipCardTable } from './FlipCardTable'

export const FlipCard = (props) => {

    const entry = props.props
    const [isFlipped, setFlip] = useState(false)
    const [table, setTable] = useState('')


    function handleFlip() {
            setFlip(!isFlipped)
    }



  return (
    <div>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className='card' onMouseOver={handleFlip} style={{backgroundImage: `url(${entry.cover})`}}>
            </div>
            <div className='card card-back' onMouseLeave={handleFlip}>
                <FlipCardTable props={entry}/>
            </div>
        </ReactCardFlip>
    </div>
  )
}
