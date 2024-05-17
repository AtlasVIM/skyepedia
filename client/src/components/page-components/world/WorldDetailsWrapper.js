import { useParams } from "react-router-dom";
import { worldDB } from "../../../db/pageitemsdb";
import WorldDetailsPage from "../../../pages/WorldDetailsPage";


export default function WorldDetailsWrapper(props) {
    const {id} = useParams()
    const currentEntry = worldDB.find( entry => entry.to === id);

    return <WorldDetailsPage props={currentEntry.elements}/>
    

}