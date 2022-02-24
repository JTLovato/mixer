import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function FavoriteButtons(props) {

    let nowDrink = props.id

    const [addToFavs, setAddToFavs] = useState([])

    const addToFavorites = () => {
        setAddToFavs(arr => [...arr, nowDrink])
        console.log(addToFavs)
    }

    return (
        <div>
            <button onClick={addToFavorites} className="button-favorites">Add To Favs</button>
            <Link to="/favorites" favs={addToFavs} className="button-favorites">Favorites</Link>
        </div>
    )
}

export default FavoriteButtons