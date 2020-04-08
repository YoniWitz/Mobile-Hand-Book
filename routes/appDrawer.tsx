import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import magazineStack from './magazineStack';

const AppDrawerNavigator = createDrawerNavigator({  
    'EHandBook Magazine': {
        screen: HomeStack,
    },
    'EHandBook Magazine Downloads': {
        screen: magazineStack
    },
    'About CCNY': {
        screen: AboutStack,
    }
})

export default createAppContainer(AppDrawerNavigator); 