import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { SharePoint } from '../screens/sharePoint';

interface Params {}

const screens = {
    SharePoint: {
        screen: SharePoint,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {          
            return {
                headerTitle: () => <Header navigation={navigation} title="SharePoint" />
            }
        }
    }
}

const SharePointStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'yellow', height: 60 }
    }
})
export default createAppContainer(SharePointStack);