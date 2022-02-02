import React, { Component } from 'react'

export default class Print extends Component {
    render() {
        return (
            <button 
                onClick="window.print()"
                className="sub-cat-indiv"
            >
                <i className="fa fa-print"></i>
                <h1>Print</h1>
            </button>
        )
    }
}
