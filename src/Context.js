import React, {useState, useEffect} from "react"

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setAllPhotos(json))
            .catch(err => console.log(err))
    }, [])

    console.log(allPhotos)

    return(
        <AppContext.Provider value={{allPhotos}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}