import { checkDocument } from '@apollo/client/utilities';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './AlbumPage.css'
import {gql,useQuery} from '@apollo/client'

function AlbumPage(){
    let {id} = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    let [first,setFirst]= useState(false);

            const ALBUM_QUERY = gql`
            query GetAlbum($id : String!){
                album(id : $id){
                    id
                    name
                    image
                    tracks{
                        id
                        name
                        preview_url
                    }
                }
            }
        `

        const {loading, error, data} = useQuery(ALBUM_QUERY, {
            variables : {
                id : id
            }
        })

        const check = () =>{
            if(first == false){
                let favorites = JSON.parse(localStorage.getItem('favorites'))
                console.log(favorites)
                if(favorites==null){
                    return;
                }
                let albumfav = {id : album.id , name : album.name, image:album.image}
                favorites.forEach(element => {
                    if(element.id == id){
                        setIsFavorite(true);
                    }
                });
                setFirst(true);
            }
        }

        const album = data ? data.album : null
        const tracks = album ? album.tracks : null

        if(loading){
            return (
                <div>loading</div>
            )
        }else{
            check()
        }
    
    const removeFavorite = () =>{
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let albumfav = {id : album.id , name : album.name, image:album.image}
        
        favorites.splice(favorites.indexOf(albumfav),1);

        localStorage.setItem('favorites',JSON.stringify(favorites));
        setIsFavorite(false);
    }

    const addFavorite = () =>{
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let albumfav = {id : album.id , name : album.name, image:album.image}
        if(favorites == null){
            favorites = []
        }
        favorites.push(albumfav)
        
        localStorage.setItem('favorites',JSON.stringify(favorites));
        setIsFavorite(true);
    } 
        return (
            <div>
                <header>
                    <img className="imageHeader" src={album.image}></img>
                    <div>
                    <h1>{album.name}</h1>
                        <div>
                    <a href="/">
                    <button className="btn btn-primary">Home</button>
                    </a>
                    {isFavorite === true ? 
                    (<button className="btn btn-warning" onClick={removeFavorite}>
                        Remove Favorite
                    </button>
                    ) 
                    : 
                    (
                    (<button className="btn btn-success" onClick={addFavorite}>
                        Add Favorite
                    </button>
                    )
                    )}
                    </div>
                    </div>
                </header>
            <div className="track-container">
                {tracks.map(track =>
                    <div className="card track-card" key={track.id}>
                        <div className="card-body">
                            <h3 className="card-title">{track.name}</h3>
                            <audio src={track.preview_url} controls />
                        </div>
                    </div>
                )}
            </div>
            </div>
        );
}

export default AlbumPage