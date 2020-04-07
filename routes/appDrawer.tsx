import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import magazineStack from './magazineStack';

const AppDrawerNavigator = createDrawerNavigator({
    Magazine: {
        screen: magazineStack
    },
    Home: {
        screen: HomeStack,
    },
    'About CCNY': {
        screen: AboutStack,
    }
})

export default createAppContainer(AppDrawerNavigator); 