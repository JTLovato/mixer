
import React from 'react'; 
import HavedRecipeCards from './HavedRecipeCards';

function IngredientsCheckBoxes(props) {

    let newData = props.ingredients
    // console.log(newData)

    let selectedIngredients = []

    let handleOnChange = (e) => {
        let isChecked = e.target.checked;
        // console.log(isChecked)
        // console.log(e.target.value)
        if (isChecked) {
            for ( let i = 0; i <= selectedIngredients.length; i++ ){
                if (e.target.value !== i) {
                    selectedIngredients.push(e.target.value)
                    console.log(selectedIngredients)
                    // DON'T DELETE BELOW, INFINITE LOOP
                    return selectedIngredients
                }
            } 
        } else if (isChecked === false) {
            selectedIngredients = selectedIngredients.filter(
                ingred => ingred !== e.target.value
            )
        }
    }

    const submitFunction = (event) => {
        event.preventDefault();
        // console.log(selectedIngredients)
    }

    return ( 
        <div>
            <form onSubmit={submitFunction}>
                <ul className="toppings-list">
                    {newData.map(( name , index) => {
                        return (
                            <li key={index}>
                                <div className="toppings-list-item">
                                    <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={name}
                                        name={name}
                                        value={name}
                                        onChange={e => handleOnChange(e)}
                                    />
                                    <label htmlFor={name}>{name}</label>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <HavedRecipeCards selectedIngredients={selectedIngredients}/>
            </form>
            <div>
            </div>
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
