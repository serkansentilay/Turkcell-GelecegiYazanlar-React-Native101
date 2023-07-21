import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from './src/Screens/Home';
import UsersScreen from './src/Screens/Users';
import UserDetail from './src/Screens/UserDetail';
import HeaderLogo from './src/components/HeaderLogo';


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        headerTitle: (props) => <HeaderLogo {...props} />,
                        // headerRight: () => (
                        //   <Button
                        //     onPress={() => alert('This is a button!')}
                        //     title="Right Btn"
                        //     color="#000"
                        //   />
                        // ),
                        // headerLeft: () => (
                        //   <Button
                        //     onPress={() => alert('This is a button!')}
                        //     title="Left Btn"
                        //     color="#000"
                        //   />
                        // ),

                    }} />
                <Stack.Screen name="Users" component={UsersScreen}
                    options={{
                        title: 'Kullanıcılar',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#000"
                            />
                        ),
                    }} />
                <Stack.Screen name="UserDetail" component={UserDetail}
                    options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;