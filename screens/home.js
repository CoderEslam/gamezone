import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function Home() {
    return (
        <View>
            <Text style={styles.container}>Home Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})