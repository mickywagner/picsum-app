import React, {useState, useContext} from "react"
import {AppContext} from "../Context"


function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(AppContext)

    const heartIcon = isHovered && 
        <i className="ri-heart-line favorite"
           onClick={() => toggleFavorite(img.id)}
        ></i> 
    const addIcon = isHovered &&  <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {addIcon}
        </div>
    )
}

export default Image