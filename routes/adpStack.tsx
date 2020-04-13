import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { ADP } from '../screens/adp';

interface Params {}

const screens = {
    ADP: {
        screen: ADP,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {          
            return {
                headerTitle: () => <Header navigation={navigation} title="ADP" />
            }
        }
    }
}

const ADPStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'yellow', height: 60 }
    }
})
export default createAppContainer(ADPStack);