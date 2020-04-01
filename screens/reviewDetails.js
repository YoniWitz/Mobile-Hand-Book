import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default ReviewDetails = ({ navigation }) => {
    const images = [
        'error',
        require("../assets/icons/rating-1.png"),
        require("../assets/icons/rating-2.png"),
        require("../assets/icons/rating-3.png"),
        require("../assets/icons/rating-4.png"),
        require("../assets/icons/rating-5.png")
    ]

    let image = images[navigation.getParam('rating')];
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>rating: </Text>
                    <Image source={image} />
                </View>
            </Card>
            <Button
                title='Back to home'
                onPress={() => navigation.pop()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})