import { createStackNavigator } from "react-navigation-stack";
import HelpCenter from "../screens/helpCenter";
import Header from "../shared/header";
import React from "react";

const screens = {
    HelpCenter: {
        screen: HelpCenter,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title="Help Center" />,
            }
        }
    }
}

const HelpStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80}
    }
});

export default  HelpStack;