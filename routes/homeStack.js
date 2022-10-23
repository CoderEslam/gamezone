import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
/*
* npm install @react-navigation/native-stack
* npm install react-native-gesture-handler
* */
const screenNav = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
}
const HomeStack = createStackNavigator(screenNav /*pass object into this fun => register for stack navigator*/)

export default createAppContainer(HomeStack);


