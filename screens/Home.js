import React, {useEffect, useState} from "react"
import {View, Text} from "react-native"
import {rootStyles as styles} from "./styles"

const Home = ({route}) => {

    const [name, setName] = useState('')
    useEffect(() => {
        console.log(route.params)
        // setName(route.params.above)
    }, [])

    return (
        <View style={styles.container}>
            <Text>Hi Home!</Text>
        </View>
    )
}

export default Home