import { Link } from 'react-router-dom'

export default function ItemLibrary(props) {
    
    const {db} = props

    return (<div>
        {db.map((entries) => {
            <Link to={entries.to}>
            <img alt={entries.name} src={entries.cover}/>
            </Link>
        })}
    </div>)
}