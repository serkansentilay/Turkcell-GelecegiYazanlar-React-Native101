import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';
import Counter from "./src/components/Counter";



const App = () => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <SafeAreaView style={styles.container}>
            {isVisible && <Counter />}

            <Button title="Göster/Gizle" onPress={() => setIsVisible(!isVisible)} />

            <StatusBar style="auto" />
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

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
