import React, { useState } from "react"
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';



const App = () => {
    const [users, setUsers] = useState([{ id: 1, name: "ahmet" }, { id: 2, name: "ali" }])
    //array içine objelerle çalışma
    const handlePress = () => {
        setUsers((prev) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: Math.floor(Math.random() * 1000)
            },
            ...prev,
        ])
    }
    //önceki bilgileri kaybetmemek için ...prev eklenmeli , sonuna eklersen ekleyceğim yeni şeyler ekranın üstüne eklenir
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
            <Button title="Ekle" onPress={handlePress} />
            <StatusBar style="auto" />
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        backgroundColor: 'aqua',
        borderBottomWidth: 2,
        padding: 10
    },
    text: {
        fontSize: 30
    }


});

export default App;
