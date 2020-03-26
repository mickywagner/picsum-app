import React from "react"
import {Link} from "react-router-dom"
import  Icon  from 'react-remixicon';


function Header() {
    return(
        <div>
            <header>
                <h2><Link to="/">Pic Some</Link></h2>
                <p><Link to="/cart"> <Icon name="wallet" type="line" size="3x" /></Link></p>
                
            </header>
        </div>
    )
}

export default Header