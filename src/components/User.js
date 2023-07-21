import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"

const User = ({ data }) => {
    return (
        <View>
            <Text>{JSON.stringify(data, null, 1)}</Text>
        </View>
    )
}

User.propTypes = {

    data: PropTypes.exact({ //obje bunları içerecek bunlardan farklı bir şey olursa uyarı verecek
        id: PropTypes.number,
        isim: PropTypes.string
    })

    // data: PropTypes.shape({  //obje şunları içerecek, verdiğimiz değerden başka tip girildiğinde uyarı verir.
    //     id: PropTypes.number,
    //     isim: PropTypes.string
    // })

    // data: PropTypes.object //obje türünde olduğunu belirtir
}

export default User