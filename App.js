import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {useCallback, useState} from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
// import Drawer from "./routes/drawer";
import Navigator from './routes/homeStack'

const getFonts = () => Font.loadAsync({})


export default function App() {
    {/* to load custom fonts*/
    }
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
        // <View>
        //     <Home/>
        <Navigator/>
        // <Drawer/>
        // </View>
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
