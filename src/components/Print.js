import React, { Component } from 'react'

export default class Print extends Component {
    render() {
        return (
            <button 
                onclick="window.print()"
                className="sub-cat-indiv"
            >
                <i class="fa fa-print"></i>
                <h1>Print</h1>
            </button>
        )
    }
}
