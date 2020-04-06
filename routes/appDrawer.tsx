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
    About: {
        screen: AboutStack,
    }
})

export default createAppContainer(AppDrawerNavigator); 