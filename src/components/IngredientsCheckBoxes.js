
import React, { useState } from 'react'; 
import MatchedDrinkCard from './MatchedDrinkCard'
import newData from '../NewData'
import Check from '../img/checkmark.png'

function IngredientsCheckBoxes() {
    
    let allDrinks = newData.drinks

    let data = newData.ingredients[0]
    let garnishes = data.garnishes
    // let mixers = data.mixers
    let alcohol = data.alcohol
        // let wine = data.alcohol.wine
            let reds = data.alcohol[0].wine[0].red
            let whites = data.alcohol[0].wine[0].white
            let sparklings = data.alcohol[0].wine[0].sparkling
            let pinks = data.alcohol[0].wine[0].pink_wine
            let desserts = data.alcohol[0].wine[0].dessert_and_fortified
        // let spirits = alcohol.spirits
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
    const [notFound, setNotFound] = useState(false)

    const [ownedIngreds, setOwnedIngreds] = useState([]);

    const [ignoreIngreds, setIgnoreIngreds] =useState(false);

    console.log(garnishes[0])

    // Adds each checked ingredient to your owned ingredients array
    const onClicks = (item) => {
        if (ownedIngreds.includes(item)) {
            // Fix this later to remove item
        } else {
            setOwnedIngreds( arr => [...arr, item]);
            console.log(ownedIngreds)
        }
        console.log(ownedIngreds)
    };

    const checkAllChange = () => {
        if (ignoreIngreds == false) {
            setIgnoreIngreds(true)
            for (let h = 0; h < garnishes.length; h ++ ) {
                ownedIngreds.push(garnishes[h])
                console.log(ownedIngreds)
            }
        } else {
            setIgnoreIngreds(false)
        }
    }

    // On click, takes owned ingredients array, and checks it through each recipe's ingredients.
    const submitFunction = (e) => {
        e.preventDefault();
            for (let i = 0; i < allDrinks.length; i++) {
                    let containsAll = allDrinks[i].ingredients.every(element => {
                    return ownedIngreds.indexOf(element) !== -1;
                });
                if (containsAll === true) {
                    setNotFound(!notFound)
                    console.log(notFound)
                    setMatchedDrinks( arr => [...arr, allDrinks[i] ])
                } else {
                    setNotFound(!notFound)
                    console.log(notFound)
                }
            }
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
                            <input className="accord" type="checkbox" id="tequilas" />
                            <label htmlFor="tequilas" className="accord-title">
                                <span className="accord-highlight"></span>
                                Tequilas</label>
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
                            <input className="accord" type="checkbox" id="gins" />
                            <label htmlFor="gins" className="accord-title">
                                <span className="accord-highlight"></span>
                                Gins
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
                                Rums
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
                            <input className="accord" type="checkbox" id="brandies" />
                            <label htmlFor="brandies" className="accord-title">
                                <span className="accord-highlight"></span>
                                Brandies
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
                            <input className="accord" type="checkbox" id="liqueurs" />
                            <label htmlFor="liqueurs" className="accord-title">
                                <span className="accord-highlight"></span>
                                Liqueurs
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
                        <input className="accord" type="checkbox" id="wines" />
                        <label htmlFor="wines" className="accord-title">
                            <span className="accord-highlight"></span>
                            Wines
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
                        <input 
                            type="checkbox"
                            name="checkAll"
                            id="checkAll"
                            className="check-all accordion-content"
                            onChange={e => checkAllChange()}
                        />
                        <label htmlFor="checkAll" className="check-all-label">
                            Ignore Garnishes?  
                            <img src={Check} alt="" className="checkMark"></img> 
                        </label>
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
                {/* <div className="owned-ingredients-list">
                    <h2 className="owned-title">What You Have So Far</h2>
                    {ownedIngreds.map( e =>
                    <div key={e} className="each-ingredient">{ e }</div>
                    )}
                </div> */}
            </form>
            <ul>
                {items.map(item => (
                <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            <ul className="ul-no-margin matched-drinks-list">
                {matchedDrinks.map(matchedDrink => (
                    <li key={matchedDrink.id}>
                        <MatchedDrinkCard matchedDrink={matchedDrink}/>
                    </li>
                ))}
            </ul>
            {notFound && 
                <div className="not-found">
                    <h1 className="not_found_title">Nothing Found</h1>
                    <h3 className="not_found_title">Try Adding More Ingredients</h3>
                </div>  
            }
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
