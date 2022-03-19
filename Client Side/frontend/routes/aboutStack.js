import { createStackNavigator } from "react-navigation-stack";
import About from '../screens/about';
import Header from "../shared/header";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About'/>,
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#E40209', height: 80}
    }
});

export default AboutStack;