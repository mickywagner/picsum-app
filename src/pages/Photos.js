import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {AppContext} from "../Context"

function Photos(props) {
    const {allPhotos} = useContext(AppContext)

    const images = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)}/>
        
    ))


    return(
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos
