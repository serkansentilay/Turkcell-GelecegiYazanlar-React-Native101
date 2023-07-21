import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListHeader = () => {
    return (
        <View style={styles.header}>
            <Text>HEADER</Text>
        </View>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'bisque',
        padding: 20
    }
})