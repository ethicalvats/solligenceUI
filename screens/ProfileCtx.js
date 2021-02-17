import React, { createContext, useState } from "react"

export const ProfileCtx = createContext({}) // 1: create a context

// 2: define a provider component for that context
const ProfileProvider = ({children}) => {

    const [fName, setFname] = useState('Input Fname')
    const [lName, setLname] = useState('Input Lname')

    const Save = (data) => {
        setFname(data.fname)
        setLname(data.lname)
    }

    const Load = (cb) => {

        return cb({
            fName,
            lName
        })
    }

    // 3: pass the value to the context provider
    return (
        <ProfileCtx.Provider value={{
                fName,
                lName,
                Save,
                Load
            }} >
            {children}
        </ProfileCtx.Provider>
    )
}

export default ProfileProvider