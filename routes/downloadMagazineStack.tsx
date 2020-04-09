import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { DownloadMagazine } from '../screens/downloadMagazine';
interface Params {

}
const screens = {
    DownloadMagazine: {
        screen: DownloadMagazine,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {            
            return {
                headerTitle: () => <Header navigation={navigation} title="Magazine" />
            }
        }
    }
}

const DownloadMagazineStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#bbb', height: 60 }
    }
})

export default createAppContainer(DownloadMagazineStack);