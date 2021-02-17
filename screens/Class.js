
import React, { useEffect, useState } from "react"
import {View, Text} from "react-native"
import { rootStyles as styles} from "./styles"

// const ClassComp = ({type}) => {

//     const [name, setName] = useState('')

//     useEffect(() => {
//         setName('Class')
//     }, [name])

//     useEffect(() => {
//         setName('Class')
//     }, [name, type])

//     return (
        // <View style={styles.container}>
        //     <Text>
        //         {name}
        //     </Text>
        // </View>
//     )
// }

class ClassComp extends React.Component {

    state

    constructor(props){
        super(props)
        this.state = {
            name: '',
            lname: '',
            fname: '',
            address: ''
        }
    }

    componentDidMount(){
        this.setState({
            name: 'Class'
        })
    }

    render(){
        const {name} = this.state
        return (
            <View style={styles.container}>
                <Text>
                    {name}
                </Text>
            </View>
        )
    }
}

export default ClassComp