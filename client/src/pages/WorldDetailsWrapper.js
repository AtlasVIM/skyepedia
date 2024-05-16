import { useParams } from "react-router-dom";
import { worldDB } from "../db/pageitemsdb";
import WorldDetailsPage from "./WorldDetailsPage";


export default function WorldDetailsWrapper(props) {
    const {id} = useParams()



    console.log(id)

    const currentEntry = worldDB.find( entry => entry.to === id);

    return <WorldDetailsPage props={currentEntry.elements}/>
    

}