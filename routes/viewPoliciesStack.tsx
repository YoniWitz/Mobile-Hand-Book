import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Header } from '../shared/header';
import { ViewPolicies } from '../screens/viewPolicies';
import { PdfScreen } from '../shared/pdfScreen';

interface Params {}

const screens = {
    ViewPolicies: {
        screen: ViewPolicies,
        navigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute<Params>, Params> }) => {          
            return {
                headerTitle: () => <Header navigation={navigation} title="TCCNY Policies" />
            }
        }
    },
    Pdf: {
        screen: PdfScreen,
        navigationOptions:{
            title: "TCCNY Policy",
        }
    }
}

const viewPoliciesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'yellow', height: 60 }
    }
})

export default createAppContainer(viewPoliciesStack);