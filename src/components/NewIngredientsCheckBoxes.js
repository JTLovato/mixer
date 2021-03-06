
import React, { useState } from 'react'; 
import MatchedDrinkCard from './MatchedDrinkCard'

function IngredientsCheckBoxes(props) {

    let newData = props.ingredients
    let allDrinks = props.drinks
    // console.log(newData)
    // console.log(allDrinks)

    const [items, setItems] = useState([]);
    const [matchedDrinks, setMatchedDrinks] = useState([]);
    const [notFound, setNotFound] = useState(true)

    const [ownedIngreds, setOwnedIngreds] = useState([]);

    // Adds each checked ingredient to your owned ingredients array
    const onClicks = (item) => {
        setOwnedIngreds( arr => [...arr, item]);
        console.log(ownedIngreds)
    };

    // On click, takes owned ingredients array, and checks it through each recipe's ingredients.
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
                    setNotFound(false)
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
                                <label htmlFor={name} className="toppings-list-item">
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
                                </label>
                            </li>
                        );
                    })}
                </ul>
                <input className="ingredients-submit" type="submit" value="Submit" />
                <div className="owned-ingredients-list">
                    <h2 className="owned-title">What You Have So Far</h2>
                    {ownedIngreds.map( e =>
                    <div key={e} className="each-ingredient">{ e }</div>
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
                </li>
                ))
                }
            </ul>
            {notFound && 
                <div>
                    <h1 className="not_found_title">Nothing Found</h1>
                    <h3 className="not_found_title">Try Adding More Ingredients</h3>
                </div>  
            }
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
