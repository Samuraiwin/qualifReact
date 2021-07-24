import React, { useState, useEffect } from 'react'
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import'./ArtistPage.css'
import {gql,useQuery} from '@apollo/client' 
import { useParams } from 'react-router-dom';

function ArtisPage(){
    let {name} = useParams()
    // const [albums,setAlbums] = useState([]);
    // const name = "Boyce Avenue";
    if(name == null){
        name="Boyce Avenue"
    }
    const [albums, setAlbums] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
          .then(res => res.json())
          .then(data => {
            setAlbums(data.data.albums)
          })
      },[name])


    return(
        <div>
            <header>
                <a href="/favorite">
                <button className="btn btn-info favorite">
                    Favorite Page
                </button>
                </a>
                <form action={`/artist/${search}`}>
                    <input type="text" name="" value={search} onChange={e=>{setSearch(e.target.value)}} id="" placeholder="Search artist!"/>
                </form>
            </header>
            <div className="album-container">
                {albums?.map(album=>{
                    return(
                        <AlbumCard album={album} artist={name} key={album.id}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default ArtisPage