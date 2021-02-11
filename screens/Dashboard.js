import React from "react"
// import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "./Home"
import Settings from "./Settings"

const Drawer = createDrawerNavigator()

const Dashboard = () => {

    return (
        // <NavigationContainer>
            <Drawer.Navigator initialRouteName={"Settings"}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}

export default Dashboard