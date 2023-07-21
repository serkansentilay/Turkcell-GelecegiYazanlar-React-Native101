import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Error: {message}</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: 'red'
    }
})