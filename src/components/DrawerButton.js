import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const DrawerButton = () => {
    const navigation = useNavigation();

    return (
        //toggleDrawer, openDrawer drawer menusun açarlar
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons name={"menu"} size={28} color={"#000"} />
        </TouchableOpacity>
    )
}

export default DrawerButton