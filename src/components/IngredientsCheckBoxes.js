
import React, { useState } from 'react'; 
import MatchedDrinkCard from './MatchedDrinkCard'
import newData from '../NewData'
import Check from '../img/checkmark.png'

function IngredientsCheckBoxes() {
    
    let allDrinks = newData.drinks

    let data = newData.ingredients[0]
    let garnishes = data.garnishes
    let mixers = data.mixers
    let alcohol = data.alcohol
        let wine = data.alcohol.wine
            let reds = data.alcohol[0].wine[0].red
            let whites = data.alcohol[0].wine[0].white
            let sparklings = data.alcohol[0].wine[0].sparkling
            let pinks = data.alcohol[0].wine[0].pink_wine
            let desserts = data.alcohol[0].wine[0].dessert_and_fortified
        let spirits = alcohol.spirits
            let whiskeys = data.alcohol[0].spirits[0].whiskey
            let tequilas = data.alcohol[0].spirits[1].tequila
            let gins = data.alcohol[0].spirits[2].gin
            let general_rum = data.alcohol[0].spirits[3].general_rum
            let brandys = data.alcohol[0].spirits[4].brandy
            let liqueurs = data.alcohol[0].spirits[5].liqueur
            let other = data.alcohol[0].spirits[6].other
        let beer = alcohol[0].beer

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
                console.log(ownedIngreds)
                console.log(allDrinks[i].ingredients)
                    let containsAll = allDrinks[i].ingredients.every(element => {
                    return ownedIngreds.indexOf(element) !== -1;
                });
                console.log(containsAll)
                if (containsAll === true) {
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
                    <input className="accord" type="checkbox" id="alcohol" />
                    <label htmlFor="alcohol" className="accord-title">
                        <span className="accord-highlight"></span>
                        Alcohol
                    </label>
                    <div className="content">
                        <input className="accord" type="checkbox" id="spirits" />
                        <label htmlFor="spirits" className="accord-title">
                            <span className="accord-highlight"></span>
                            Spirits
                        </label>
                        <div className="content">
                            <input className="accord" type="checkbox" id="whiskey" />
                            <label htmlFor="whiskey" className="accord-title">
                                <span className="accord-highlight"></span>
                                Whiskey
                            </label>
                            <div className="content drink-map">
                            {whiskeys.map((name, index) => {
                                    return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="tequila" />
                            <label htmlFor="tequila" className="accord-title">
                                <span className="accord-highlight"></span>
                                Tequila</label>
                                <div className="content drink-map">
                            {tequilas.map((name, index) => {
                                    return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="gin" />
                            <label htmlFor="gin" className="accord-title">
                                <span className="accord-highlight"></span>
                                Gin
                            </label>
                            <div className="content drink-map">
                            {gins.map((name, index) => {
                                     return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="general_rum" />
                            <label htmlFor="general_rum" className="accord-title">
                                <span className="accord-highlight"></span>
                                Rum
                            </label>
                            <div className="content drink-map">
                            {general_rum.map((name, index) => {
                            return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="brandy" />
                            <label htmlFor="brandy" className="accord-title">
                                <span className="accord-highlight"></span>
                                Brandy
                            </label>
                            <div className="content drink-map">
                            {brandys.map((name, index) => {
                            return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="liqueur" />
                            <label htmlFor="liqueur" className="accord-title">
                                <span className="accord-highlight"></span>
                                Liqueur
                            </label>
                            <div className="content drink-map">
                            {liqueurs.map((name, index) => {
                            return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <input className="accord" type="checkbox" id="wine" />
                        <label htmlFor="wine" className="accord-title">
                            <span className="accord-highlight"></span>
                            Wine
                        </label>
                        <div className="content">
                            <input className="accord" type="checkbox" id="reds" />
                            <label htmlFor="reds" className="accord-title">
                                <span className="accord-highlight"></span>
                                Reds
                            </label>
                            <div className="content drink-map">
                                {reds.map((name, index) => {
                                    return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="whites" />
                            <label htmlFor="whites" className="accord-title">
                                <span className="accord-highlight"></span>
                                Whites
                            </label>
                            <div className="content drink-map">
                                {whites.map((name, index) => {
                                     return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="sparkling" />
                            <label htmlFor="sparkling" className="accord-title">
                                <span className="accord-highlight"></span>
                                Sparkling
                            </label>
                            <div className="content drink-map">
                                {sparklings.map((name, index) => {
                                        return (
                                            <>
                                                <input
                                                    type="checkbox"
                                                    key={name}
                                                    id={name}
                                                    name={name}
                                                    value={name}
                                                    onChange={e => onClicks(e.target.value)}
                                                    className="accordion-content"
                                                />
                                                <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                    {name}
                                                    <img src={Check} alt="" className="checkMark"></img>
                                                </label>
                                            </>
                                        )
                                    })}
                            </div>
                            <input className="accord" type="checkbox" id="pinks" />
                            <label htmlFor="pinks" className="accord-title">
                                <span className="accord-highlight"></span>
                                Pinks
                            </label>
                            <div className="content drink-map">
                                {pinks.map((name, index) => {
                                     return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                            <input className="accord" type="checkbox" id="desserts" />
                            <label htmlFor="desserts" className="accord-title">
                                <span className="accord-highlight"></span>
                                Desserts / Fortifieds
                            </label>
                            <div className="content drink-map">
                                {desserts.map((name, index) => {
                                     return (
                                        <>
                                            <input
                                                type="checkbox"
                                                key={name}
                                                id={name}
                                                name={name}
                                                value={name}
                                                onChange={e => onClicks(e.target.value)}
                                                className="accordion-content"
                                            />
                                            <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                                {name}
                                                <img src={Check} alt="" className="checkMark"></img>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <input className="accord" type="checkbox" id="other" />
                        <label htmlFor="other" className="accord-title">
                            <span className="accord-highlight"></span>
                            Other
                        </label>
                        <div className="content drink-map">
                            {other.map((name, index) => {
                                 return (
                                    <>
                                        <input
                                            type="checkbox"
                                            key={name}
                                            id={name}
                                            name={name}
                                            value={name}
                                            onChange={e => onClicks(e.target.value)}
                                            className="accordion-content"
                                        />
                                        <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                            {name}
                                            <img src={Check} alt="" className="checkMark"></img>
                                        </label>
                                    </>
                                )
                            })}
                        </div>
                        <input className="accord" type="checkbox" id="beer" />
                        <label htmlFor="beer" className="accord-title">
                            <span className="accord-highlight"></span>
                            Beer
                        </label>
                        <div className="content drink-map">
                            {beer.map((name, index) => {
                                 return (
                                    <>
                                        <input
                                            type="checkbox"
                                            key={name}
                                            id={name}
                                            name={name}
                                            value={name}
                                            onChange={e => onClicks(e.target.value)}
                                            className="accordion-content"
                                        />
                                        <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                            {name}
                                            <img src={Check} alt="" className="checkMark"></img>
                                        </label>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <input className="accord" type="checkbox" id="mixes" />
                    <label htmlFor="mixes" className="accord-title">
                        <span className="accord-highlight"></span>
                        Mixes
                    </label>
                    <div className="content drink-map">
                    {data.mixers.map((name, index) => {
                             return (
                                <>
                                    <input
                                        type="checkbox"
                                        key={name}
                                        id={name}
                                        name={name}
                                        value={name}
                                        onChange={e => onClicks(e.target.value)}
                                        className="accordion-content"
                                    />
                                    <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                        {name}
                                        <img src={Check} alt="" className="checkMark"></img>
                                    </label>
                                </>
                            )
                        })}
                    </div>
                    <input className="accord" type="checkbox" id="garnishes" />
                    <label htmlFor="garnishes" className="accord-title">
                        <span className="accord-highlight"></span>
                        Garnishes
                    </label>
                    <div className="content drink-map">
                        {garnishes.map((name, index) => {
                             return (
                                <>
                                    <input
                                        type="checkbox"
                                        key={name}
                                        id={name}
                                        name={name}
                                        value={name}
                                        onChange={e => onClicks(e.target.value)}
                                        className="accordion-content"
                                    />
                                    <label htmlFor={name} className="toppings-list-item ingredient-checkbox" key={index}>
                                        {name}
                                        <img src={Check} alt="" className="checkMark"></img>
                                    </label>
                                </>
                            )
                        })}
                    </div>
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
                ))}
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
