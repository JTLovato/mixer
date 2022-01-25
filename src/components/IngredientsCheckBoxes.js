
import React, {useState} from 'react'; 

function IngredientsCheckBoxes(props) {

    let newData = props.data

    


        {/* let newDrinks = Data.ingredients[0].alcohol
    // Turning into an array
    let drinkIngredients = Object.values(newDrinks)


    // Function to put all haved ingredients into list
    let ingredientsHaved = []
    // console.log(ingredientsHaved)
    let onCheckChange = () => { 
        const [checked, setChecked] = useState(false); 
        const handleChange = () => { 

        setChecked(!checked); 
    }; 

    // Putting Every Ingredient Into CheckList
    let list = drinkIngredients.map((val, index) => (
        <li key={index + 1}>
            <label htmlFor={index + 1}>
                <input
                className="ingredient-checkbox"
                id={index + 1} 
                type="checkbox"/>
                {checked ? 'Checked' : 'Not checked'}
                {val}
            </label>
        </li>
    )) */}

        
    
    return ( 
        <div>

        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
