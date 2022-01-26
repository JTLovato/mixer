
import React from 'react'; 

function IngredientsCheckBoxes(props) {

    let newData = props.ingredients
    // console.log(newData)

    let newestArray = []

    let handleOnChange = (e) => {
        let isChecked = e.target.checked;
        // console.log(isChecked)
        // console.log(e.target.value)
        if (isChecked) {
            for ( let i = 0; i <= newestArray.length; i++ ){
                if (e.target.value !== i) {
                    newestArray.push(e.target.value)
                    console.log(newestArray)
                    return newestArray
                }
            } 
        } else if (isChecked === false) {
            newestArray = newestArray.filter(
                ingred => ingred !== e.target.value
            )
        }
        console.log(newestArray)
        return newestArray
    }

    
    return ( 
        <div>
            <ul className="toppings-list">
                {newData.map(( name , index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    onChange={e => handleOnChange(e)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <h1>So far, you've got:</h1>
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
