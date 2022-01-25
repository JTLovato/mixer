import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../img/spilled_drink.png'

function WhatToMake() {
    return (
        <Link to={'WhatToMake'}>
            <div className="what-to-make-card">
                <div className="what-to-make-card-inner">
                    <h3>Not Sure<br></br>What To Make?</h3>
                    <h1>We Gotchu</h1>
                    <div className="header-div">
                        <h4>See How We Can Help</h4>
                        <i class="fa fa-arrow-right"></i>
                    </div>
                </div>
                <div>
                    <img className="spilled-drink" src={Image} alt=""></img>
                </div>
            </div>
        </Link>
    )
}

export default WhatToMake
