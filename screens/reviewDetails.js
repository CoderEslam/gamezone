import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {globalStyle} from "../styles/global";

export default function ReviewDetails() {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>ReviewDetails Screen</Text>
        </View>
    )
}
