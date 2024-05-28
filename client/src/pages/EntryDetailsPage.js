import DetailsHistory from "../components/page-components/details/DetailsHistory";
import DetailsIntroduction from "../components/page-components/details/DetailsIntroduction";



export default function EntryDetailsPage(props) {
    const entry = props.props

    return (<div className='details-wrapper'>
       {entry.elements.includes('intro') && <DetailsIntroduction props={entry}/>}
       {entry.elements.includes('history') && <DetailsHistory props={entry}/>}
    </div>)

}