//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, useColorScheme, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
   

    return (
        <View style={{
            ...styles.container,
            ...style,
            backgroundColor:'white' ,
        }}>
            
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
});

//make this component available to the app
export default WrapperContainer;