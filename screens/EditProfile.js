import React, { useContext, useState } from "react"
import { View, Button, TextInput } from "react-native"
import { rootStyles as styles } from "./styles";
import {ProfileCtx} from "./ProfileCtx"

const EditProfile = () => {

    const {Save, Load} = useContext(ProfileCtx)

    const [fnameValue, setFnameValue] = useState('Enter Fname')
    const [lnameValue, setLnameValue] = useState('Enter Lname')

    const inputChangeHandler = (value, tag) => {
        if(tag === 'fname'){
            setFnameValue(value)
        }else{
            setLnameValue(value)
        }
    }

    const onLoad = (data) => {
        setFnameValue(data.fName)
        setLnameValue(data.lName)
    }

    return (
        <View style={styles.container}>
            <TextInput value={fnameValue} onChangeText={(text) => inputChangeHandler(text, 'fname')} />
            <TextInput value={lnameValue} onChangeText={(text) => inputChangeHandler(text, 'lname')} />
            <Button title={"Save"} onPress={(e) => Save({
                fname: fnameValue,
                lname: lnameValue
            })} />
            <Button title={"Load"} onPress={() => Load(onLoad)} />
        </View>
    )
}

export default EditProfile