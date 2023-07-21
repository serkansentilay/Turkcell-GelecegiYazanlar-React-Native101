import React from 'react'
//screens
import HomeScreen from '../Screens/Home';
import UsersScreen from '../Screens/Users';
import UserDetail from '../Screens/UserDetail';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerButton from '../components/DrawerButton';
import { Button } from 'react-native';


const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}
                options={() => ({
                    headerLeft: () => <DrawerButton />
                })}
            />
        </HomeStack.Navigator>
    );
}

const UsersStack = createNativeStackNavigator();

function UsersStackNavigator() {
    return (
        <UsersStack.Navigator>
            <UsersStack.Screen name="Users" component={UsersScreen} />
            <UsersStack.Screen name="UserDetail" component={UserDetail} />
        </UsersStack.Navigator>
    );
}


export { HomeStackNavigator, UsersStackNavigator }