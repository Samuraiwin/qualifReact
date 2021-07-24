import { Link } from 'react-router-dom'
import './FavoriteCard.css'

function FavoriteCard({favorite}){
    

    return(
        <Link to={`/album/${favorite.id}`} className="card album-card" key={favorite.id}>
            <img src={favorite.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h3 className="card-title">{favorite.name}</h3>
            </div>
        </Link>
    )
}

export default FavoriteCard