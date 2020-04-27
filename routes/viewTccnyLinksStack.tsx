import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { ViewTccnyLinks } from '../screens/viewTccnyLinks';

interface Params {}

const screens = {
    TccnyLinks: {
        screen: ViewTccnyLinks,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {          
            return {
                headerTitle: () => <Header navigation={navigation} title="TCCNY Links" />
            }
        }
    }
}

const ViewTccnyLinksStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'yellow', height: 60 }
    }
})
export default createAppContainer(ViewTccnyLinksStack);