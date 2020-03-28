import React, {useContext} from "react"
import {AppContext} from "../Context"
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function CartItem({item}) {
    const {removeFromCart} = useContext(AppContext)
    const [hovered, ref] = useHover()

    const iconClass = (hovered) ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return(
        <div className="cart-item">
            <i 
                className={iconClass} 
                onClick={() => removeFromCart(item.id)} 
                ref={ref}
            >   
            </i>
            <img src={item.url} width="130px" />
            <p>5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem