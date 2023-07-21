import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderLogo = () => {
    return (
        <View>
            <Image
                style={{ width: 40, height: 40 }}
                source={require('../../assets/favicon.png')}
            />
        </View>
    )
}

export default HeaderLogo

const styles = StyleSheet.create({})