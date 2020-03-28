import React, {useContext} from "react"
import {AppContext} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems} = useContext(AppContext)

    const cartElements = cartItems.map(item => 
        <CartItem key={item.id} item={item} />
    )
    
    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
        </main>
    )
}

export default Cart