import React, { useState } from "react"
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';



const App = () => {
    const [name, setName] = useState("ahmet")
    const [age, setAge] = useState(29)
    const [isVisible, setIsVisible] = useState(true)
    const [user, setUser] = useState({ id: 1, name: "serkan" })

    const handlePress = () => {
        //setUser({ ...user, id: 2 }) //...user o anki halini alırız ardından güncelleme yaparız ... öncekileri korur ve id 2 ile güncelleme yaparız
        setUser(prev => ({ ...prev, id: 2 })) //setuser prev döndürüyor içindekilere erişiyoruz yukardaki ile aynı işlem olur 
        //bu yukardakiler object state olarak geçiyor
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button title={isVisible ? "Gizle" : "Göster"} onPress={() => setIsVisible(!isVisible)} />
            {isVisible && <>
                <View>
                    <Text>{name}</Text>
                    <Text>{age}</Text>
                    <Button title="İsmi degistir" onPress={() => setName("mehmet")} />
                    <Button title="Yaşı degistir" onPress={() => setAge(30)} />
                    <Text>ID: {user.id}</Text>
                    <Text>Name: {user.name}</Text>
                    <Button title="Click" onPress={handlePress} />
                </View>
            </>}

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


});

export default App;
