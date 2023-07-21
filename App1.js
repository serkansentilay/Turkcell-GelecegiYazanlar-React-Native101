//stillendirme ilk projedeki app.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
                <Text style={[styles.text, styles.text1]}>React Native</Text>
            </View>

            <View style={[styles.box, styles.box2]}>
                <Text style={[styles.text, styles.text2]}>React</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.text}>Javascript</Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
        marginBottom: 10
    },
    box1: {
        backgroundColor: "blue"
    },
    box2: {
        backgroundColor: 'bisque'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        backgroundColor: 'gray',
        textAlign: 'center'
    },
    text1: {
        backgroundColor: 'red'
    },
    text2: {
        backgroundColor: 'yellow'
    }

});
