import { createStackNavigator } from "react-navigation-stack";
import Search from '../screens/search';
import Header from "../shared/header";
import React from "react";

const screens = {
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Search' />,
            }
        }
    }
}

const SearchStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80}
    }
});

export default SearchStack;