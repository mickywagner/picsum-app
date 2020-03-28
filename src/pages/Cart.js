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
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Submit Order</button>
            </div>
        </main>
    )
}

export default Cart