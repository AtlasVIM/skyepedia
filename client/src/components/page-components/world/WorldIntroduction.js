import bookBG from '../../../assets/openbookbg.png'

export default function WorldIntroduction(props) {

    const entry = props.props

    console.log(entry)
     return(
        <div className='world-intro'>
            <div>
                <img alt='book' src={bookBG}/>
                <div>
                    <img className='cover' alt='entry cover' src={entry.cover} />
                </div>
            </div>
        </div>
     )
}