import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return(
        <div>
            <header>
                <h2><Link to="/">Pic Some</Link></h2>
                <p><Link to="/cart">Cart</Link></p>
            </header>
        </div>
    )
}

export default Header