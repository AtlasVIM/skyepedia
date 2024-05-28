import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"

export default function DetailsHistory(props) {
    const entry = props.props
    const [content, setContent] = useState('')

    useEffect(() => {
        import(`../../../markdown/history/${entry.md}.md`)
        .then( res => {

            fetch(res.default)
            .then(res => res.text())
            .then(res => setContent(res))
            .catch(err => console.log(err))
        })
        .catch(e => console.log(e))
    })


    return(
        <div className='history-wrapper'>
            <img alt='History POLAROID' src={entry.polaroids.history}/>
            <Markdown className='permanent-marker-regular'>
                {content}
            </Markdown>
        </div>
        
    )
}