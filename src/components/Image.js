import React, {useState, useContext} from "react"
import {AppContext} from "../Context"
import PropTypes from 'prop-types'


function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addCartItem, cartItems} = useContext(AppContext)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function addIcon(imgID) {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>
        }                
    }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {addIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }) 
}

export default Image