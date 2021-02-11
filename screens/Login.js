import React, {useState} from "react"
import {View, Button, TextInput, Alert} from "react-native"
import {rootStyles as styles} from "./styles"

const Login = ({navigation}) => {

    const [loginPressed, setLoginPressed] = useState(false)
    const [inputValueAbove, setInputValueAbove] = useState('')
    const [inputValueBelow, setInputValueBelow] = useState('')
    const [showSuccess, setShowSucces] = useState(false)

    const handlePress = e => {
        setLoginPressed(true)
    }

    const Form = () => {
        return (
            <View style={styles.form}>
                <TextInput 
                    onChangeText={text => {
                        setInputValueAbove(text)
                    }}
                    value={inputValueAbove}
                    style={styles.input} />
                <TextInput
                    onChangeText={text =>{
                        setInputValueBelow(text)
                    }}
                    value={inputValueBelow}
                    style={styles.input} />
                <Button
                    title={"SEND"}
                    onPress={success}
                    color={"green"}
                 />
            </View>
        )
    }

    const success = () => {
        navigation.navigate('dashboard', {
            above: inputValueAbove,
            below: inputValueBelow
        })
    }
        // Alert.alert(
        //     "Sending...",
        //     `Inputs: Above ${inputValueAbove} Below ${inputValueBelow}`,
        //     [
        //       {
        //         text: "Cancel",
        //         onPress: () => console.log("Cancel Pressed"),
        //         style: "cancel"
        //       },
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ],
        //     { cancelable: false }
        //   );

    
    return (
        <View style={styles.container}>
            {
                loginPressed?
                    <Form />:
                    <Button 
                    title={"SIGN IN"} 
                    onPress={handlePress}
                    color="#841584" />
            }
            {
                showSuccess?
                <Success />:
                <></>
            }
        </View>
    )
}

export default Login