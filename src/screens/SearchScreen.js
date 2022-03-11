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
                {drinks.filter(post => {
                if (query === '') {
                    return post;
                } else if (post.name.toLowerCase().includes(query)) {
                    console.log(post)
                    return post
                }
            }).map((post, index) => (
                <div key={index} className="searched-drink">
                    <Link to={`/drink/${post.name}`} state={{ from: post }}>
                        {post.name}
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

export default SearchScreen