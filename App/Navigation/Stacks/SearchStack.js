import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Search from '../../Screens/Search';
 

 
const SearchStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default SearchStack;