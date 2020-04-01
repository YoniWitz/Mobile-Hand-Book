import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const pressHandler = () => navigation.openDrawer()

    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            <MaterialIcons
                name='menu'
                size={28}
                style={styles.icon}
                onPress={pressHandler} />
            <View style={styles.title}>
                <Image source={require('../assets/heart_logo.png')} style={styles.image} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        marginLeft:-15,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    image: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    title: {
        flexDirection: 'row'
    }
})