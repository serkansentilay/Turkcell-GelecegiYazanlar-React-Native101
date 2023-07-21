import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Item = ({ item, navigation }) => {
    //navigation sayfalara ait özellik olduğundan yani componentler arası geçişte kullanılıyor, yukarıdan çağıramıyoruz onun için useNavigation kullanılmalı
    //usersscreen sayfasında Item componenti çağırırken navigation göndereceğiz ve yukarıdan çağıracağız ya da burada useNavigation kullanıcağız ikiside aynı 
    // const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("UserDetail", { id: item.id })}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'gray',
        borderBottomWidth: 1,

    },
    text: {
        fontSize: 30
    }
})