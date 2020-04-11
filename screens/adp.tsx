import React from 'react';
import { OpenURL } from '../shared/openUrl';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { View } from 'react-native';

interface IProps {
    navigation: any
}

export const ADP: React.FC<IProps> = ({ navigation }) => {
    let openUrl = OpenURL;
   
    return (
       <View>
           {openUrl(navigation)}
        </View>
    )
}