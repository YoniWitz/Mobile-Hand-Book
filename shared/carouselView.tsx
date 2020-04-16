import React, { useState } from 'react';
import { StyleSheet, GestureResponderEvent, LayoutChangeEvent, TouchableHighlight, Text, ImageBackground } from 'react-native';
import { IImages } from '../models/IImages';

interface IProps{
    images:IImages[]
}

export const CarouselView: React.FC<IProps> = ({images}) => {
    let [imageIndex, setImageIndex] = useState(0);
    let [imageWidth, setImageWidth] = useState<number>(0);

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

    return (<TouchableHighlight
        onPress={(event) => nextImage(event)}
        style={styles.image}>
        <ImageBackground
            source={images[imageIndex].source}
            onLayout={(event) => onNewLayout(event)}
            style={styles.image}>
            <Text style={styles.imageCaption}>{images[imageIndex].caption}</Text>
        </ImageBackground>
    </TouchableHighlight>)

}

const styles = StyleSheet.create({
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
    }
});