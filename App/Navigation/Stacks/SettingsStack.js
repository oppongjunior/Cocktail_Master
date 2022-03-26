import React from 'react';
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
export default SettingStack;