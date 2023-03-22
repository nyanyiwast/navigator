import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/Login";

//CONFIGURE SCREENS - Top screen is auto set to default
const screens = {
    Welcome: { //name of the header
        screen: LoginScreen //show loginscreen on the screen
    },
    Home: { //name of the header
        screen: HomeScreen //show homescreen on the screen
    },  
}

const HomeStack = createStackNavigator(screens) //creates a stack navigator and stores in  home stack
export default createAppContainer(HomeStack); //CONTAINS ALL INFOR ABOUT WHAT WE EXPORT
