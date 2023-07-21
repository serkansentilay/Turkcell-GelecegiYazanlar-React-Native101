import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Image } from 'react-native';


const App = () => {

    const handleClick = () => {
        alert("Merhaba")
    }

    return (
        <View style={styles.container}>
            <Button title="Click Button" onPress={handleClick} />

            <TouchableOpacity onPress={handleClick}>
                <Text>Click TouchableOpacity</Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={handleClick} activeOpacity={0.2} underlayColor={"red"}>
                <Text>Click TouchableHighlight</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback onPress={handleClick}>
                <Text>Click TouchableWithoutFeedback</Text>
            </TouchableWithoutFeedback>


            <Image
                resizeMode='contain'
                style={{
                    width: '100%',
                    height: 180,
                    borderWidth: 2,
                    borderColor: 'red'
                }}
                source={require('./assets/favicon.png')}
            //source={{ uri: "https://media.istockphoto.com/id/1314099040/photostockholm-old-town-city-skyline-cityscape-of-sweden.jpg?s=612x612&w=0&k=20&c=5a5-tABYidmPdgAGqz3LK0b0DUx9E67zTZqqj47rgDs=" }}
            />

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


});

export default App;
