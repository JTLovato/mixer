
import React from 'react'; 

function IngredientsCheckBoxes(props) {

    let newData = props.ingredients
    // console.log(newData)

    let newestArray = []

    const handleOnChange = (e) => {
        let isChecked = e.target.checked;
        // console.log(isChecked)
        // console.log(e.target.value)
        if (isChecked) {
            for ( let i = 0; i <= newestArray.length; i++ ){
                if (e.target.value != i) {
                    newestArray.push(e.target.value)
                    return newestArray
                }
            } 
        } else if (isChecked == false) {
            newestArray = newestArray.filter(
                ingred => ingred != e.target.value
            )
        }
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
        </div>
    )
}
    
    
    export default IngredientsCheckBoxes;
