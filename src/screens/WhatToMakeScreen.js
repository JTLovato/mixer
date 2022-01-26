import React, { useState } from 'react';
import IngredientsCheckBoxes from '../components/IngredientsCheckBoxes';
import Data from '../Data'


function WhatToMakeScreen() {

    let ingredients = Data.ingredients[0].alcohol

    return ( 
    <div> 
        <h1>What Ingredients Do You Have?</h1>
        <IngredientsCheckBoxes ingredients={ingredients} />
    </div> 
    
    ) 
    
} 

    export default WhatToMakeScreen