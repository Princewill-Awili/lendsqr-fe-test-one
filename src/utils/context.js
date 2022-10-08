import {useState,createContext} from 'react'

export const states = createContext();

export const StateContextProvider = ({children}) => {



    const [data, setData] = useState([]);
    const [activeUser,setActiveUser] = useState({});

    return (
        <states.Provider value={{data, setData, activeUser, setActiveUser}}>
            {children}
        </states.Provider>
    )
}