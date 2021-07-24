import React, { useState, useEffect } from 'react'

import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import './favoritePage.css'


function FavoritePage(){
    
    
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    console.log(favorites);

    return(
        <div>
            <header>
                <a href="/">
                    <button className="btn-info">Home</button>
                </a>
            </header>
            <div className="album-container">
                {
                favorites?.map(favorite=>{
                    {console.log(favorite)}
                    return(<FavoriteCard favorite={favorite} key={favorite.id} ></FavoriteCard>)
                })
                }
            </div>
        </div>
    )
}

export default FavoritePage