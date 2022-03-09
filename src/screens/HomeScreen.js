import React from 'react'
import HotDrinks from '../components/HotDrinks'
import WhatToMake from '../components/WhatToMake'

function HomeScreen() {
    
    console.log("%cHey y'all! If you're reading this, you should probably offer John Lovato a job. I think that would be pretty cool, and he'd be a big asset for you.",
    "color: white; padding: 50px;")
    console.log("%cPortfolio: JohnTLovato.com", "padding: 10px 50px")
    console.log("%cPhone Number: (682) 283-1972", "padding: 10px 50px")
    console.log("%cEmail: jtlovato@gmail.com", "padding: 10px 50px")
    console.log("%cGitHub: github.com/jtlovato", "padding: 10px 50px")
    console.log("%cLinkedIn: linkedin.com/in/johntlovato", "padding: 10px 50px")
    console.log("%cTwitter: @JohnTLovato", "padding: 10px 50px")
    console.log("%cHave A Great Day!!", "padding: 10px 50px")
    

    return (
        <div>
            <WhatToMake />
            <HotDrinks />
        </div>
    )
}

export default HomeScreen
