import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header'
import Magazine from '../screens/magazine'

const screens = {
    Magazine: {
        screen: Magazine,
        navigationOptions: ({ navigation }) => {
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