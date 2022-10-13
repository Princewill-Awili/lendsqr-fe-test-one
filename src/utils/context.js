import {useState,createContext} from 'react'

export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [userData, setUserData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [activeUser, setActiveUser] = useState({});
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    return (
        <states.Provider 
            value={{
                    showFilter, setShowFilter,
                    userData, setUserData,
                    activeUser, setActiveUser,
                    isLoggedIn , setIsLoggedIn
                }}
        >
            {children}
        </states.Provider>
    )
}