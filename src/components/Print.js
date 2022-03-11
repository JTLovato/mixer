import React, { Component } from 'react'

export default class Print extends Component {
    render() {
        return (
            <button 
                onClick="window.print()"
                className="sub-cat-indiv"
            >
                <h1>Print</h1>
            </button>
        )
    }
}
