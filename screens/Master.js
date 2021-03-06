import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "./Home"
import Settings from "./Settings"
const Tab = createBottomTabNavigator()

const Master = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default Master