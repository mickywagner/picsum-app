import React from "react"

function CartItem(props) {
    return(
        <div>
            <h2>{props.item.id}</h2>
        </div>
    )
}

export default CartItem