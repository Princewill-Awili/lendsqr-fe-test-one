import {useState,createContext} from 'react'

export const states = createContext();

export const StateContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [user,setUser] = useState({});

    return (
        <states.Provider value={{data, setData, user, setUser}}>
            {children}
        </states.Provider>
    )
}