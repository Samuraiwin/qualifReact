import { Link } from 'react-router-dom'
import './AlbumCard.css'

function AlbumCard({album,artist}){
    
    const name = artist
    const url = `/album/${album.id}`;

    return(
        <Link to={`/album/${album.id}`} className="card album-card" key={album.id}>
            <img src={album.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h3 className="card-title">{album.name}</h3>
                <p className="card-subtitle">{name}</p>
            </div>
        </Link>
    )
}

export default AlbumCard