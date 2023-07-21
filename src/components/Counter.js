import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, FlatList, StatusBar } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(1)

    //  useEffect(() => {
    //      console.log("state degisti")
    //  })
    //bu şekilde kullanıldığında herhangi bir state degistiginde bu tetiklenecektir

    //  useEffect(() => {
    //      console.log("component mount edildi")
    //  }, [])
    //eğer bu şekilde kullanılırsa component mount edilmiş oluyor uygulama açıldığında 1 defa çalışıyor

    useEffect(() => {
        console.log("count state degisti")
    }, [count])
    //burda ise count a bağlı olarak state durumu degistiginde tetikleniyor, count degisirse bu da çalışacak

    useEffect(() => {
        console.log("amount state degisti")
    }, [amount])
    //burda ise amaount a bağlı olarak state durumu degistiginde tetikleniyor, amount degisirse bu da çalışacak

    useEffect(() => {
        console.log("count veya amount state degisti")
    }, [count, amount])
    //burda ise amount veya counttan herhangi biri tetkiklenirse bu çalışacak


    useEffect(() => {
        const interval = setInterval(() => {

            // setCount(count + 1) // setCount(0+1) -> setCount(1) bunu sürekli 1 yapar
            setCount((prev) => prev + 1) //prevstate ile kullanırsak bu durum düzelecektir sürekli count artacaktır,
            //bu useeffect içinde 1 kez çalışıyor ama setInterval içinde sürekli çalışır 
            console.log("setInterval")
        }, 1000)

        // console.log("component mount edildi")
        return () => {
            console.log("unmount") //unmount ı return ile yakalıyoruz
            clearInterval(interval)
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="Arttır" onPress={() => setCount(count + amount)} />

            <Text style={styles.text}>Amount: {amount}</Text>
            <Button title="1" onPress={() => setAmount(1)} />
            <Button title="5" onPress={() => setAmount(5)} />

            <StatusBar style="auto" />
        </SafeAreaView>


    );
}

export default Counter

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
})