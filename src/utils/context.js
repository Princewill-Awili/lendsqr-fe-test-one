import {useState,createContext} from 'react'

export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [userData, setUserData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [activeUser, setActiveUser] = useState({});

    return (
        <states.Provider value={{showFilter, setShowFilter,userData, setUserData,activeUser, setActiveUser}}>
            {children}
        </states.Provider>
    )
}