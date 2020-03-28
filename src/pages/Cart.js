import React, {useContext, useState} from "react"
import {AppContext} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems, emptyCart} = useContext(AppContext)
    const orderTotal = (cartItems.length * 5.99).toLocaleString("en-us", {style: "currency", currency: "USD"})
    const [buttonText, setButtonText] = useState("Place Order")
    
    const cartElements = cartItems.map(item => 
        <CartItem key={item.id} item={item} />
    )

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("order placed")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)     
    }
    
    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost">Total: {orderTotal} </p>
            
            {
                cartItems.length > 0 ? <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
                </div> : <p>You have no items in your cart.</p> 
            }
            
        </main>
    )
}

export default Cart