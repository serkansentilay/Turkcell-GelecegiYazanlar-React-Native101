import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={[styles.child, styles.child5]}></View>
                <View style={[styles.child, styles.child6]}></View>
                <View style={[styles.child, styles.child7]}></View>
                <View style={[styles.child, styles.child8]}></View>

            </View>

            <View style={styles.box2}>
                <View style={[styles.child, styles.child1]}></View>
                <View style={[styles.child, styles.child2]}></View>
                <View style={[styles.child, styles.child3]}></View>
                <View style={[styles.child, styles.child4]}></View>

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
        flexDirection: 'column', //dikey
        justifyContent: 'space-around', //yatay olarak aralarda boşluk bırakr
        alignItems: 'center' //dikey olarak ortalar


    },
    child5: {
        backgroundColor: 'gray'
    },
    child6: {
        backgroundColor: 'aqua'
    },
    child7: {
        backgroundColor: 'pink'
    },
    child8: {
        backgroundColor: 'purple'
    },


    box2: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: 'row', //yatay
        justifyContent: 'space-between', //yatay olarak başı ve sonu sıfırlar ortada boşluk bırakır birbiriyle.
        alignItems: 'flex-end' //dikey olarak en altta

    },

    child: {
        width: 50,
        height: 50
    },

    child1: {
        backgroundColor: 'yellow'
    },
    child2: {
        backgroundColor: 'bisque'
    },
    child3: {
        backgroundColor: 'blue'
    },
    child4: {
        backgroundColor: 'black'
    }



});
