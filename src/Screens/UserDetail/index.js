import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Loading from '../../components/Loading'
import axios from "axios"
import Error from '../../components/Error'

const UserDetail = ({ route, navigation }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = route.params
    const [userId, setUserId] = useState(id)
    const [error, setError] = useState(null)


    useEffect(() => {
        //fetch ile başlatılmış bir isteği iptal edemyiz ve res.json birlikte kullanılmalı
        //fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //    .then((res) => res.json())
        //    .then((data) => setUser(data))
        // axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //     .then((res) => setUser(res.data))
        //     .catch(err => setError(err.message))
        //     .finally(() => setLoading(false))
        getData()
    }, [userId])

    const getData = async () => {
        try {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
            setUser(data)
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setUserId((id) => id + 1 > 10 ? 1 : id + 1)} title="Next" />
            ),
        });
    }, [navigation]);


    if (loading) {
        return <Loading text="Loading..." />
    }

    if (error) {
        return <Error message={error} />
    }

    return (

        <View>
            <Text>User ID: {userId}</Text>
            <Text style={styles.text}>UserDetail</Text>
            <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>

            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />
        </View>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})