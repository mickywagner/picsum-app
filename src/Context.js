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

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return(
        <AppContext.Provider 
            value={{allPhotos, toggleFavorite, addCartItem, cartItems, removeFromCart, emptyCart}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}