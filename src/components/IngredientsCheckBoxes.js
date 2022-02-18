
import React, { useState } from 'react'; 
import HavedRecipeCards from './HavedRecipeCards';
import MatchedDrinkCard from './MatchedDrinkCard'

function IngredientsCheckBoxes(props) {

    let newData = props.ingredients
    let allDrinks = props.drinks
    // console.log(newData)
    // console.log(allDrinks)

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [matchedDrinks, setMatchedDrinks] = useState([]);

    const [ownedIngreds, setOwnedIngreds] = useState([]);

    const onClicks = (item) => {
        setOwnedIngreds( arr => [...arr, item]);
        console.log(ownedIngreds)
    };

    const submitFunction = (e) => {
        e.preventDefault();
        console.log(ownedIngreds); 
        for (let i = 0; i < allDrinks.length; i++) {
            // console.log(allDrinks[i].ingredients)
                let containsAll = allDrinks[i].ingredients.every(element => {
                return ownedIngreds.indexOf(element) !== -1;
            });
            // console.log(containsAll)
            if (containsAll == true) {
                console.log(allDrinks[i].id)
                setMatchedDrinks( arr => [...arr, allDrinks[i] ])
            }
        }
        console.log(matchedDrinks);
    }

    return ( 
        <div>
            <form onSubmit={submitFunction}>
                <ul className="toppings-list ul-no-margin">
                    {newData.map(( name , index) => {
                        return (
                            <li key={index}>
                                <div className="toppings-list-item">
                                    <div className="left-section">
                                    <input
                                        type="checkbox"
                                        key={name}
                                        id={name}
                                        name={name}
                                        value={name}
                                        onChange={e => onClicks(e.target.value)}
                                    />
                                    <label className="ingredient-checkbox" htmlFor={name}>{name}</label>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <input className="ingredients-submit" type="submit" value="Submit" />
                <div className="owned-ingredients-list">
                    <h2 class="owned-title">What You Have So Far</h2>
                    {ownedIngreds.map( e =>
                    <div className="each-ingredient">{ e }</div>
                    )}
                </div>
            </form>
            <ul>
                {items.map(item => (
                <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            <ul className="ul-no-margin">
                {matchedDrinks.map(matchedDrink => (
                <li key={matchedDrink.id}>
                    <MatchedDrinkCard matchedDrink={matchedDrink}/>
                    {/* <DrinkCard matchedDrink={matchedDrink} /> */}
                </li>
                ))
                }
            </ul>
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
