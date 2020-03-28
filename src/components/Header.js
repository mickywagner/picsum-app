import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {AppContext} from "../Context"



function Header() {
    const {cartItems} = useContext(AppContext)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"


    return(
        <div>
            <header>
                <h2><Link to="/">Pic Some</Link></h2>
                <Link to="/cart"> 
                    <i className={`${cartClassName} ri-fw ri-2x`}></i>
                </Link>
                
            </header>
        </div>
    )
}

export default Header