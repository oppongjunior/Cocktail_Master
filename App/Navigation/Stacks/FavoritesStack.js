import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Favorites from '../../Screens/Favorites';
 

 
const FavoritesStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default FavoritesStack;