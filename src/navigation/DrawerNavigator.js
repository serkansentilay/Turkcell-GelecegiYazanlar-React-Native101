import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { UsersStackNavigator } from './StackNavigator'
import TabNavigator from './TabNavigator';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerType: 'front',
                //drawerType permanent sürekli açık kalır, front ekranın üstüne biner
                drawerStyle: { width: 150 },
                swipeEnabled: true


            }}
            // drawerContent={() => <DrawerContent />}  kendin drawer compenent tasarımı yapabilirsin
            initialRouteName='UsersDra'
        >
            <Drawer.Screen name="HomeDra" options={{ title: 'Home' }} component={TabNavigator} />
            <Drawer.Screen name="UsersDra" options={{ title: 'Users' }} component={UsersStackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator