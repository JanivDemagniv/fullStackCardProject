import React, { createContext, useContext, useEffect, useState } from 'react'
import { getToken, getUser } from '../services/localStorageService'

const UserData = createContext()

export default function UserProvider({ children }) {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(getToken())

    useEffect(() => {
        if (!user) {
            const userFromLocalStorage = getUser();
            setUser(userFromLocalStorage)
        }
    }, [user])

    return (
        <UserData.Provider value={{ user, setUser, token, setToken }}>{children}</UserData.Provider>
    )
}

export const useCurrentUser = () => {
    const context = useContext(UserData)
    if (!context) {
        throw new Error('you can only call useCurrentUser under the UserProvider children')
    }

    return context
}

