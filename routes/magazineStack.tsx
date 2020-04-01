import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,  NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header'
import { Magazine } from '../screens/magazine'
interface Params {

}
const screens = {
    Magazine: {
        screen: Magazine,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params>}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Magazine" />
            }
        }
    }
}

const MagazineStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#bbb', height: 60 }
    }
})

export default createAppContainer(MagazineStack);