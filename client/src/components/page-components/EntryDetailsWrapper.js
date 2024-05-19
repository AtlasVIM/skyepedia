import { useParams } from "react-router-dom";
import EntryDetailsPage from "../../pages/EntryDetailsPage";


export default function EntryDetailsWrapper(props) {
    const {id} = useParams()
    const currentEntry = props.db.find( entry => entry.to === id);

    return <EntryDetailsPage props={currentEntry}/>
    

}