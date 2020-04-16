import React, { useState } from 'react';
import { StyleSheet, GestureResponderEvent, LayoutChangeEvent, View, TouchableHighlight, Text, ImageBackground, Button, PermissionsAndroid, Alert } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { requestDownloadPermission } from '../shared/pdfDownload';

export const DownloadMagazine: React.FC<IProps> = () => {
    let [imageIndex, setImageIndex] = useState(0);
    let [imageWidth, setImageWidth] = useState<number>(0);

    const images = [
        { caption: "1. Introduction", source: require('../assets/images/2.jpg') },
        { caption: "2. whatever1", source: require('../assets/images/3.png') },
        { caption: "3. whatever2", source: require('../assets/images/4.jpg') },
        { caption: "4. whatever4", source: require('../assets/images/5.jpg') },
        { caption: "5. whatever5", source: require('../assets/images/1.jpg') }
    ]

    let nextImage = (event: GestureResponderEvent) => {
        const X = event.nativeEvent.locationX;
        const touchCalc = (X < imageWidth / 2) ? -1 : 1;
        let newIndex = (imageIndex + touchCalc) % images.length;
        if (newIndex < 0)
            newIndex = images.length - 1;

        setImageIndex(newIndex);
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

            <Button
                color="orange"
                title='Download section'
                onPress={requestDownloadPermission}
            />
            <View style={styles.empty} />
            <View style={styles.container}>
                {/* <Button
                    color="orange"
                    title='Download handbook'
                    onPress={buttonHandler}
                /> */}
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