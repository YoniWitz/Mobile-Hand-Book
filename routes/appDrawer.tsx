import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import ViewMagazineStack from './viewMagazineStack';
import ViewPoliciesStack from './viewPoliciesStack';
import { Dimensions } from 'react-native';
import ADPStack from './adpStack';
import SharePointStack from './sharePointStack';
import ViewTccnyLinksStack from './viewTccnyLinksStack';

const AppDrawerNavigator = createDrawerNavigator(
    {
        NavScreen1: {
            screen: ViewMagazineStack,
            navigationOptions: {
                drawerLabel: 'EHandBook Magazine',
            }
        },
        NavScreen2: {
            screen: ViewPoliciesStack,
            navigationOptions: {
                drawerLabel: 'TCCNY Policies',
            }
        },
        NavScreen3: {
            screen: ViewTccnyLinksStack,
            navigationOptions: {
                drawerLabel: 'TCCNY Links',
            }
        },
        NavScreen4: {
            screen: AboutStack,
            navigationOptions: {
                drawerLabel: 'About TCCNY',
            }
        },
        NavScreen5: {
            screen: SharePointStack,
            navigationOptions: {
                drawerLabel: 'Get SharePoint Mobile App',
            }
        },
        NavScreen6: {
            screen: ADPStack,
            navigationOptions: {
                drawerLabel: 'ADP',
            }
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