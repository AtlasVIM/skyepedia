import DetailsHistory from "../components/page-components/details/DetailsHistory";
import DetailsIntroduction from "../components/page-components/details/DetailsIntroduction";



export default function EntryDetailsPage(props) {

    return (<div className='details-wrapper'>
       <DetailsIntroduction props={props.props}/>
       <DetailsHistory props={props.props}/>
    </div>)

}