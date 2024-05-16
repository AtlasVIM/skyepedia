


export default function WorldDetailsPage(props) {

    return (<div className='parallax'>
       {console.log(props.props)}
       {props.props.map((element) => {
        return(
            <div>
                {element}
            </div>
        )
       })}
    </div>)

}