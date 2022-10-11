import {useState,createContext} from 'react'

export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [showFilter, setShowFilter] = useState(false);
    return (
        <states.Provider value={{showFilter, setShowFilter}}>
            {children}
        </states.Provider>
    )
}