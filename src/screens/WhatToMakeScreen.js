import React, { useState } from 'react';
import IngredientsCheckBoxes from '../components/IngredientsCheckBoxes';
import Data from '../Data'


function WhatToMakeScreen() {

    let ingredients = Data.ingredients[0].alcohol

    return ( 
    <div> 
        <h1>What Ingredients Do You Have?</h1>
        <div className="button-hold">
            {/* TODO Fix checked radio buttons */}
            <input type="radio" id="searchAny" name="search" checked value="Any Ingredients" />
            <label htmlFor="searchAny">Any Ingredients</label>
            <input type="radio" id="searchAll" name="search" value="Only Selected" />
            <label htmlFor="searchAll">Only Selected</label>
        </div>
        <IngredientsCheckBoxes ingredients={ingredients} />
    </div> 
    
    ) 
    
} 

    export default WhatToMakeScreen