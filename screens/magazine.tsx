import React, { useState } from 'react';
import { StyleSheet, GestureResponderEvent, LayoutChangeEvent, View, TouchableHighlight, Text, ImageBackground, Button } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const Magazine: React.FC<IProps> = ({ navigation }) => {
    let [imageIndex, setImageIndex] = useState(0);
    let [imageWidth, setImageWidth] = useState<number>(0);

    const images = [{ caption: "1. Introduction", source: require('../assets/images/2.jpg') },
    { caption: "2. whatever1", source: require('../assets/images/3.png') },
    { caption: "3. whatever2", source: require('../assets/images/4.jpg') },
    { caption: "4. whatever4", source: require('../assets/images/5.jpg') },
    { caption: "5. whatever5", source: require('../assets/images/1.jpg') }]

    let nextImage = (event: GestureResponderEvent) => {
        const X = event.nativeEvent.locationX;
        const touchCalc = (X < imageWidth / 2) ? -1 : 1;
        let newIndex = (imageIndex + touchCalc) % images.length;
        if (newIndex < 0)
            newIndex = images.length - 1;

        setImageIndex(newIndex);
    }

    let buttonHandler = () => {
        console.log('handbook downloaded');
    }

    let onNewLayout = (event: LayoutChangeEvent) => {
        setImageWidth(event.nativeEvent.layout.width);
    }

    return (
        <View style={styles.container}>
            <View style={styles.empty} />
            <TouchableHighlight
                onPress={(event) => nextImage(event)}
                style={styles.image}>
                <ImageBackground
                    source={images[imageIndex].source}
                    onLayout={(event) => onNewLayout(event)}
                    style={styles.image}>
                    <Text style={styles.imageCaption}>{images[imageIndex].caption}</Text>
                </ImageBackground>
            </TouchableHighlight>

            <Button onPress={buttonHandler} title='Download handbook' />
            <View style={styles.empty} />
            <View style={styles.container}>
                <Button
                    onPress={() => navigation.navigate('Pdf')}
                    title='Open PDF'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FcFF'
    },
    image: {
        flex: 2,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageCaption: {
        textAlign: 'center',
        backgroundColor: 'rgba(100,100,100, 0.5)',
        color: 'white',
        width: 320
    },
    empty: {
        flex: 1
    }
})