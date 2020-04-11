import React, { useEffect } from 'react';
import { View, Linking } from 'react-native';

interface IProps {
    navigation: any
}

export const OpenURL: React.FC<IProps> = ({ navigation }) => {
    const url = 'https://www.google.com';
    useEffect(() => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
                navigation.navigate('NavScreen1');
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    });
    return (
        <View>

        </View>)
}