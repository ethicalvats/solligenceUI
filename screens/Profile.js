import React, { useContext, useState, useEffect } from "react"
import { Button, View, Text } from "react-native"
import {ProfileCtx} from "./ProfileCtx"
import {rootStyles as styles} from "./styles"

const Profile = ({navigation}) => {

    // 5: use the context to get the values from it
    const {fName, lName} = useContext(ProfileCtx)

    const [fnameValue, setFnameValue] = useState('Enter Fname')
    const [lnameValue, setLnameValue] = useState('Enter Lname')

    useEffect(() => {
        console.log(fName, lName)
        if(fName){
            setFnameValue(fName)
        }
        if(lName){
            setLnameValue(lName)
        }
    }, [fName, lName])

    const gotoEdit = () => {
        navigation.navigate("Edit Profile")
    }

    return (
        <View style={styles.container}>
            <Text>{fnameValue}</Text>
            <Text>{lnameValue}</Text>
            <Button title={"Edit"} onPress={gotoEdit} />
        </View>
    )
}

export default Profile