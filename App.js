// This code sets up a navigation structure using React Navigation and integrates Redux for state management.

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from "./containers/HomeScreen";

// Create a stack navigator using the createNativeStackNavigator function
const Stack = createNativeStackNavigator();

// Export the main component as the default export
export default () => {
    return (
        // Wrap the entire app with the Provider component to provide the Redux store
        <Provider store={store}>
            {/* Set up the navigation container */}
            <NavigationContainer>
                {/* Configure the stack navigator */}
                <Stack.Navigator>
                    {/* Define a screen with the name 'Todo List' and the HomeScreen component */}
                    <Stack.Screen name='Todo List' component={HomeScreen}  />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}