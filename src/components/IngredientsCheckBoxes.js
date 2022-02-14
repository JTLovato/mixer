
import React, { useState } from 'react'; 
import HavedRecipeCards from './HavedRecipeCards';

function IngredientsCheckBoxes(props) {

    let newData = props.ingredients
    // console.log(newData)

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");

    // const addItem = event => {
    //     event.preventDefault();
    //     setItems([
    //         ...items,
    //         {
    //             id: items.length,
    //             name: itemName
    //         }
    //     ]);
    //     setItemName("");
    //     console.log(itemName)
    //     console.log(items)
    // };

    // const addItem = (itemValue) => {
    //     setItems(oldArray => [...oldArray, itemValue])
    // }

    const [ownedIngreds, updateOwnedIngreds] = useState([]);

    const onClicks = (item) => {
        updateOwnedIngreds( arr => [...arr, item]);
        console.log(ownedIngreds)
    };

    return ( 
        <div>
            <form   >
                <ul className="toppings-list">
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
                                        // onChange={ onClicks }
                                    />
                                    <label htmlFor={name}>{name}</label>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <h2>What You Have So Far</h2>
                    {ownedIngreds.map( e =>
                    <div>{ e }</div>
                    )}
                </div>
                <input type="submit" value="Submit" />

                {/* <HavedRecipeCards selectedIngredients={selectedIngredients}/> */}
            </form>
            



            {/* <form onSubmit={addItem}>
                <label>
                    <input
                        name="item"
                        type="text"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}
                    />
                </label>
            </form> */}
            <ul>
                {items.map(item => (
                <li key={item.name}>{item.name}</li>
                ))}
            </ul>
            



            <div>
            </div>
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
