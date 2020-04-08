import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { Home } from '../screens/home';
import { PdfScreen } from '../shared/pdfScreen';

interface Params {

}

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {          
            return {
                headerTitle: () => <Header navigation={navigation} title="EHandBook Magazine" />
            }
        }
    },
    Pdf: {
        screen: PdfScreen,
        navigationOptions:{
            title: "Employee Handbook",
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#bbb', height: 60 }
    }
})

export default createAppContainer(HomeStack);