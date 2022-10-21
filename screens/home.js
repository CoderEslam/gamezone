import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {globalStyle} from "../styles/global";

export default function Home() {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>Home Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    titleText: {
        fontFamily: 'fasthand',
        fontSize: 32
    }
})