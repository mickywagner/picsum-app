import React from "react"

const AppContext = React.createContext()

function AppContextProvider({children}) {
    return(
        <AppContext.Provider value="">
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}