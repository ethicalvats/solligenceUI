import React, { createContext, useState, useEffect } from "react"
import {AsyncStorage} from "react-native"
export const ProfileCtx = createContext({}) // 1: create a context

// 2: define a provider component for that context
const ProfileProvider = ({children}) => {

    const STORAGE_KEY = "Profile:key"

    const _setData = async (data) => {
        const res = await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        return res
    }

    const _getData = async () => {
        const res = await AsyncStorage.getItem(STORAGE_KEY)
        return JSON.parse(res)
    }

    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')

    useEffect(() => {
        _getData()
            .then(data => {
                setFname(data.fname)
                setLname(data.lname)
            })
    }, [])

    const Save = (data) => {
        // setFname(data.fname)
        // setLname(data.lname)
        _setData(data)
        .then(res => {
            console.log("Success")
            return _getData()
        })
        .then(data => {
            setFname(data.fname)
            setLname(data.lname)
        })
        .catch(err => {
            console.log("Fail")
        })
    }

    // 3: pass the value to the context provider
    return (
        <ProfileCtx.Provider value={{
            fName, 
            lName,
                Save
            }} >
            {children}
        </ProfileCtx.Provider>
    )
}

export default ProfileProvider