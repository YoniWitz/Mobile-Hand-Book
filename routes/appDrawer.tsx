import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import ViewMagazineStack from './viewMagazineStack';
import DownloadMagazineStack from './downloadMagazineStack';

const AppDrawerNavigator = createDrawerNavigator({  
    'EHandBook Magazine': {
        screen: ViewMagazineStack,
    },
    'EHandBook Magazine Downloads': {
        screen: DownloadMagazineStack
    },
    'About CCNY': {
        screen: AboutStack,
    }
})

export default createAppContainer(AppDrawerNavigator); 