import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native"
import { Card } from "react-native-elements"

import {Posts} from "../lib/data"
import { rootStyles as styles } from "./styles";


const PostItem = ({item, key}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(item.title)
        setBody(item.body)
    }, [])

    return (
        <View style={{
            marginVertical: 20
        }}>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Divider />
                <Text>{body}</Text>
            </Card>
        </View>
    )
}

const Post = () => {

    const [posts] = useState(Posts)
    
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={(postObj) => <PostItem key={postObj.id} {...postObj} />}
            />
        </View>
    )
}

export default Post