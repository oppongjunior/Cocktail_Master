import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
const Error = () => {
    return (
        <View style={styles.container}>
           <LottieView source={require("../assets/Lotties/Error.json")} autoPlay loop />
        </View>
    );
}

 
export default Error;