import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import ViewMagazineStack from './viewMagazineStack';
import DownloadMagazineStack from './downloadMagazineStack';
import { Dimensions } from 'react-native';

const AppDrawerNavigator = createDrawerNavigator(
    {
        NavScreen1: {
            screen: ViewMagazineStack,
            navigationOptions: {
                drawerLabel: 'EHandBook Magazine',
            },
        },
        NavScreen2: {
            screen: DownloadMagazineStack,
            navigationOptions: {
                drawerLabel: 'EHandBook Magazine Downloads',
            },
        },
        NavScreen3: {
            screen: AboutStack,
            navigationOptions: {
                drawerLabel: 'About TCCNY',
            },
        },
        NavScreen4:{
            screen:AboutStack,
            navigationOptions: {
                drawerLabel: 'TCCNY Policies',
            },
        },
        NavScreen5:{
            screen:AboutStack,
            navigationOptions: {
                drawerLabel: 'SharePoint',
            },
        },
        NavScreen6:{
            screen:AboutStack,
            navigationOptions: {
                drawerLabel: 'ADP',
            },
        }
    },
    {
        drawerWidth: Dimensions.get('window').width - 2000,
         drawerBackgroundColor: 'orange',
        contentOptions: {
            activeTintColor: 'yellow',
            inactiveTintColor: 'white',
        }
    }
)

export default createAppContainer(AppDrawerNavigator); 