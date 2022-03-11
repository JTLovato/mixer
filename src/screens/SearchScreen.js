import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from '../NewData'

function SearchScreen() {

    const [query, setQuery] = useState("")
    let drinks = Data.drinks
    
    return (
        <div className="search-container">
            <input 
                className="search-bar"
                placeholder="Search By Drink Name" 
                onChange={event => setQuery(event.target.value.toLowerCase())} 
            />
            <h3>Matched Drinks So Far</h3>
            {drinks.filter(drink => {
                if (query === '') {
                    return drink;
                } else if (drink.name.toLowerCase().includes(query)) {
                    return drink
                }
            }).map((drink, index) => (
                <div key={index} className="searched-drink">
                    <Link to={`/drink/${drink.name}`} state={{ from: drink }}>
                        {drink.name}
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

export default SearchScreen