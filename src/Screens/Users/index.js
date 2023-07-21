import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Item from "./Item"
import Loading from '../../components/Loading'
import axios from "axios"
import Error from '../../components/Error'

const data = [
    {
        id: 1,
        name: "ahmet"
    },
    { id: 2, name: "mehmet" },
    { id: 3, name: "fatma" }
]

function UsersScreen({ navigation }) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //.then(data => setUsers(data))
        // axios("https://jsonplaceholder.typicode.com/users")
        //     .then(res => setUsers(res.data))
        //     .catch(err => setError(err.message))
        //     .finally(() => setLoading(false))
        getData()
    }, [])

    const getData = async () => {
        try {
            const { data } = await axios("https://jsonplaceholder.typicode.com/users")
            setUsers(data)

        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
        //useeffect async başına ekleyemediğimizden farklı bir fonksiyon yazıp async ve await ona ekledik yukarıdakinden bir farkı yok aynı çalışacaktır, await veri çekene kadar bekleyecektir içinde kullandığıımz catch biz burda try catch ile yakalıyoruz finally ise en sonda
    }

    if (loading) {
        return <Loading text="Loading..." />
    }
    if (error) {
        return <Error message={error} />
    }


    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Users Screen</Text>
        //     <Button title="Home sayfasına geç" onPress={() => navigation.navigate("Home")} />
        //     <Button title="Geri git" onPress={() => navigation.goBack()} />

        // </View>
        <View style={{ flex: 1 }}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Item item={item} navigation={navigation} />}
            // ya bu renderItem Item componentinde navigation gönderecğiz ya da Item sayfasından useNavigation kullanacağız ikiside aynı
            />
            <Button title="Geri git" onPress={() => navigation.goBack()} />

        </View>
    );
}
//navigation push ekranın üstüne ekler, navigate ise onun yerine koyar 
export default UsersScreen

const styles = StyleSheet.create({})