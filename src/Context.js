import React, {useState, useEffect} from "react"

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setAllPhotos(json))
            .catch(err => console.log(err))
    }, [])

    function toggleFavorite(id) {
        const newArray = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(newArray)
    }

    function addCartItem(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    return(
        <AppContext.Provider value={{allPhotos, toggleFavorite, addCartItem, cartItems}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}