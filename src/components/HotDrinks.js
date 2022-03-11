import React from 'react'
import Data from '../NewData'
import DrinkCard from './DrinkCard'

function HotDrinks() {
    
    return (
        
        <div className="hot-drinks-container">
            <h1 className="white-header hot-drinks-title">Hottest Drinks Now</h1>
            <DrinkCard data={Data} />
            <DrinkCard data={Data} />
            <DrinkCard data={Data} />
        </div>
    )
}

export default HotDrinks
