import WorldIntroduction from "../components/page-components/world/WorldIntroduction";



export default function EntryDetailsPage(props) {

    return (<div className='parallax'>
       {console.log(props.props)}
       {/*props.props.elements.map((element) => {
        return(
            <div>
                {element}
            </div>
        )
       })*/}
       <WorldIntroduction props={props.props}/>
    </div>)

}