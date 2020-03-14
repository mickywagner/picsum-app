import React, {useState} from "react"

const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    return(
        <AppContext.Provider value={{allPhotos}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}