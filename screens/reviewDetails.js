import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

export default function ReviewDetails() {
    return (
        <View>
            <Text style={styles.container}>ReviewDetails Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})