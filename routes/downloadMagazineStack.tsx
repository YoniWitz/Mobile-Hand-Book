import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { DownloadMagazine } from '../screens/downloadMagazine';

interface Params {}

const screens = {
    DownloadMagazine: {
        screen: DownloadMagazine,
        navigationOptions: () => {            
            return {
                headerTitle: () => <Header navigation={null} title="Magazine" />
            }
        }
    }
}

const DownloadMagazineStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'yellow', height: 60 }
    }
})

export default createAppContainer(DownloadMagazineStack);