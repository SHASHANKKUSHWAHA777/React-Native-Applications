import React, { JSX } from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
}   from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'               

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return(<SafeAreaView style={{ flex: 1 }}>
         <View style={[styles.container, { backgroundColor: isDarkMode ? '#000000ff' : '#ffffffff'}]}>
        <Text style= {isDarkMode ? styles.whitetext : styles.blacktext}>Hello world!</Text>
    </View>
    </SafeAreaView>
    )
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start', //ye left right karta hai
        justifyContent: 'flex-start' //ye up down karta hai
    },
    whitetext: {
        color: '#ffffff'
    },
    blacktext: {
        color: '#000000ff'
    }
 })


export default AppPro;
