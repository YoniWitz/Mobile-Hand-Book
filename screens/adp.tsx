import React, { useCallback } from 'react';
import { useFocusEffect } from 'react-navigation-hooks';
import { View, Linking } from 'react-native';
interface IProps {
    navigation: any
}

export const ADP: React.FC<IProps> = ({ navigation }) => {
    const url = 'https://www.google.com';
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