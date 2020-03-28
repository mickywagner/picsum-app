import React, {useContext, useState} from "react"
import {AppContext} from "../Context"

function CartItem({item}) {
    const {removeFromCart} = useContext(AppContext)
    const [isHovered, setIsHovered] = useState(false)

    const iconClass = (isHovered) ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    

    return(
        <div className="cart-item">
            <i 
                className={iconClass} 
                onClick={() => removeFromCart(item.id)} 
                onMouseLeave={() => setIsHovered(false)}
                onMouseEnter={() => setIsHovered(true)}>   
            </i>
            <img src={item.url} width="130px" />
            <p>5.99</p>
        </div>
    )
}

export default CartItem