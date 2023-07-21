import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Title from './src/components/Title';
import User from './src/components/User';
import Users from './src/components/Users';

const App = () => {
    return (
        <View style={styles.container}>

            <Header />

            <Title color="red" number={0} isVisible={true} />
            <Title text="React" color="blue" number={"1"} isVisible={"true"} />
            <Title text="Javascript" color="green" number={2} isVisible={true} />

            <User data={{ id: 1, isim: "serkan", soyisim: "sentilay" }} />


            <Users data={["Ahmet", "Ali", "Can"]} />

            <StatusBar style="auto" />

        </View>
        // { } objeyi ifade eder
        // [] arrayi ifade eder

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },


});

export default App;
