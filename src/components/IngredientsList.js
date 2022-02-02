import React, { Component } from 'react'

export default class IngredientsList extends Component {

    ingredients = this.props.ingredients['ingredients']

    render() {
        const list = this.ingredients.map((val, index) => (
            <li key={index + 1}>
                <label htmlFor={index + 1}>
                    <input
                    className="checkbox"
                    id={index + 1} 
                    type="checkbox"/>
                    {val}
                </label>
            </li>
        ))
        return (
            <div>
                <h2>Ingredients List</h2>
                <ol className="ingredients-list">
                    {list}
                </ol>
            </div>
        )
    }
}
