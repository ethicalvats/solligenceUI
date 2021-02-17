import React, { useContext } from "react"
import { Button, View, Text } from "react-native"
import {ProfileCtx} from "./ProfileCtx"
import {rootStyles as styles} from "./styles"

const Profile = ({navigation}) => {

    // 5: use the context to get the values from it
    const {fName, lName} = useContext(ProfileCtx)

    const gotoEdit = () => {
        navigation.navigate("Edit Profile")
    }

    return (
        <View style={styles.container}>
            <Text>{fName}</Text>
            <Text>{lName}</Text>
            <Button title={"Load"} onPress={() => {}} />
            <Button title={"Edit"} onPress={gotoEdit} />
        </View>
    )
}

export default Profile