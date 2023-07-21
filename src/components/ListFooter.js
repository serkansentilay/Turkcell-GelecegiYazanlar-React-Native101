import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListFooter = () => {
    return (
        <View style={styles.footer}>
            <Text>FOOTER</Text>
        </View>
    )
}

export default ListFooter

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        backgroundColor: 'aqua'
    }
})