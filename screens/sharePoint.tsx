import React, { useCallback } from 'react';
import { useFocusEffect } from 'react-navigation-hooks';
import { View, Linking } from 'react-native';

interface IProps {
    navigation: any
}

export const SharePoint: React.FC<IProps> = ({ navigation }) => {
    const url = 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/mobile-app?wt.mc_id=AID638358_QSG_175660&rtc=1';
    useFocusEffect(useCallback(() => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url)
                    .then(() => navigation.navigate('NavScreen1'));
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
        return () => console.debug("screen loses focus");
    }, []));
    return (<View></View>);
}