import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

const Title = (props) => {
    return (
        <>
            <View>
                {props.isVisible &&
                    <Text style={[styles.title, { color: props.color }]}>{props.number + 1} - {props.text}</Text>
                }
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 700
    }
})

Title.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    number: PropTypes.number,
    isVisible: PropTypes.bool
}

Title.defaultProps = {
    text: "Varsayılan text",
    color: "red",
    number: 0,
    isVisible: true
}

export default Title