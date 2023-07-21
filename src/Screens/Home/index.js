import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

function HomeScreen({ navigation }) {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        //UseEffect() is asynchronous, useLayoutEffect() hook is synchronous
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount((c) => c + 1)} title="+" />
            ),
            // headerLeft: () => (
            //     <Button onPress={() => setCount((c) => c - 1)} title="-" />
            // ),

        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>{count}</Text>
            <Button title="User sayfasına geç" onPress={() => navigation.navigate("Users")} />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({})