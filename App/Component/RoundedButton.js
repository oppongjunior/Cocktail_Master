import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 

const RoundedButton = ({
    style={},
    textStyle={},
    size=125,
    ...props
}) => {
    return (
       <TouchableOpacity style={[style,]} onPress={props.onPress}>
           <Text style={[textStyle,]}>{props.title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export default RoundedButton;