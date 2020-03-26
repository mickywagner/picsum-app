import React, {useState} from "react"


function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false)


    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {
                isHovered ? <i className="ri-add-circle-line cart"></i> :
                <i className="ri-heart-line favorite"></i> 
            }
        </div>
    )
}

export default Image