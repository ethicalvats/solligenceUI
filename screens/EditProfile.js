import React, { useContext, useEffect, useState } from "react"
import { View, Button, TextInput } from "react-native"
import { rootStyles as styles } from "./styles";
import {ProfileCtx} from "./ProfileCtx"

const EditProfile = () => {

    const {Save, fName, lName} = useContext(ProfileCtx)

    const [fnameValue, setFnameValue] = useState('Enter Fname')
    const [lnameValue, setLnameValue] = useState('Enter Lname')

    useEffect(() => {
        if(fName){
            setFnameValue(fName)
        }
        if(lName){
            setLnameValue(lName)
        }
    }, [fName, lName])

    const inputChangeHandler = (value, tag) => {
        if(tag === 'fname'){
            setFnameValue(value)
        }else{
            setLnameValue(value)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput value={fnameValue} onChangeText={(text) => inputChangeHandler(text, 'fname')} />
            <TextInput value={lnameValue} onChangeText={(text) => inputChangeHandler(text, 'lname')} />
            <Button title={"Save"} onPress={(e) => Save({
                fname: fnameValue,
                lname: lnameValue
            })} />
        </View>
    )
}

export default EditProfile