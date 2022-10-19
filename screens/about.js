import {Text, View} from "react-native";
import {StatusBar} from 'expo-status-bar';

export default function About(){
    return(
        <View>
            <Text style={styles.container}>About Screen</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:24
    }
})