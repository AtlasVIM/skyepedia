import bookBG from '../../../assets/openbookbg.png'

export default function WorldIntroduction(props) {

    const entry = props.props

    console.log(entry)
     return(
        <div className='world-intro'>
            <div>
                <img alt='book' src={bookBG}/>
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                           <img className='cover' alt={`${entry.name} Item Card`} src={entry.cover} />
                        </div>
                        <div className='flip-card-back'>
                            <p>poggers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}