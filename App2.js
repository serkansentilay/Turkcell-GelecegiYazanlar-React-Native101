// flexdirection 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.child4}></View>
                <View style={styles.child5}></View>

            </View>

            <View style={styles.box2}>
                <View style={styles.child1}></View>
                <View style={styles.child2}></View>
                <View style={styles.child3}></View>

            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column'
    },
    box1: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row'
    },
    child4: {
        flex: 1,
        backgroundColor: 'gray'
    },
    child5: {
        flex: 1,
        backgroundColor: 'aqua'
    },

    box2: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    child1: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    child2: {
        flex: 1,
        backgroundColor: 'bisque'
    },
    child3: {
        flex: 1,
        backgroundColor: 'blue'
    }

});
