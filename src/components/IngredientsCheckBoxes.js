
import React, { useState } from 'react'; 

function IngredientsCheckBoxes(props) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    let handleOnChange = (e) => {
        let isChecked = e.target.checked;
        if (isChecked) {
            for (let i = 0; i <= selectedIngredients.length; i++) {
                if (e.target.value !== i) {
                    setSelectedIngredients([...selectedIngredients, e.target.value + ", "]);
                }
            }
        } else if (isChecked === false) {
            setSelectedIngredients((selectedIngredients) =>
                selectedIngredients.filter((ing) => ing !== e.target.value)
            );
        } 
        console.log(selectedIngredients)
    };

    return (
        <div>
            <ul className="toppings-list">
                {props.ingredients.map((name, index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={name}
                                        name={name}
                                        value={name}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                    <label htmlFor={name}>{name}</label>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        So Far You Have {selectedIngredients.length} Ingredients: {selectedIngredients}
        </div>
    );
}


export default IngredientsCheckBoxes;
