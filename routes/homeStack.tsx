import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { ReviewDetails } from '../screens/reviewDetails';
import { Header } from '../shared/header';
import { Home } from '../screens/home';

interface Params {

}

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {
            //navigationOptions: (navigation: any) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Home" />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#bbb', height: 60 }
    }
})

export default createAppContainer(HomeStack);