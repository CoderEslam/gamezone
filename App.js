import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./screens/home";
import * as Font from 'expo-font';
import {useCallback, useState} from "react";
import AppLoading from 'expo'
import ReviewDetails from "./screens/reviewDetails";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import About from "./screens/about";

const getFonts = () => Font.loadAsync({})


export default function App() {
    {/* to load custom fonts*/}
    const [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'fasthand': require('./assets/fonts/Fasthand-Regular.ttf')
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <Home/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
