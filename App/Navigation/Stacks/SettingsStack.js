import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Settings from '../../Screens/Settings';
 

 
const SettingStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default SettingStack;