import {useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import MarkDown from 'markdown-to-jsx'

export const FlipCard = (props) => {

    const entry = props.props
    const [isFlipped, setFlip] = useState(false)
    const [table, setTable] = useState('')


    function handleFlip() {
            setFlip(!isFlipped)
    }

    useEffect(() => {
        import(`../../markdown/tables/${entry.md}.md`)
        .then( res => {

            fetch(res.default)
            .then(res => res.text())
            .then(res => setTable(res))
            .catch(err => console.log(err))
        })
        .catch(e => console.log(e))
    })


  return (
    <div>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className='card' onMouseOver={handleFlip} style={{backgroundImage: `url(${entry.cover})`}}>
            </div>
            <div className='card card-back' onMouseLeave={handleFlip}>
                <MarkDown>
                    {table}
                </MarkDown>
            </div>
        </ReactCardFlip>
    </div>
  )
}
