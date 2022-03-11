import React from 'react'
import { Link } from 'react-router-dom'

function SearchLink() {

    return (
        <Link to="search" className="home-search">
            Search For Drinks
        </Link>
    )
}

export default SearchLink