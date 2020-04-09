import React, { useState } from 'react';
import { StyleSheet, GestureResponderEvent, LayoutChangeEvent, View, TouchableHighlight, Text, ImageBackground, Button } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import RNFS from 'react-native-fs';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const DownloadMagazine: React.FC<IProps> = ({ navigation }) => {
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

    let buttonHandler = () => {
        RNFS.readDir(RNFS.DocumentDirectoryPath)
            .then(result => {
                console.log('GOT RESULT', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .then((statResult) => {
                if (statResult[0].isFile()) {
                    // if we have a file, read it
                    return RNFS.readFile(statResult[1], 'utf8');
                }

                return 'no file';
            })
            .then((contents) => {
                var path = RNFS.DocumentDirectoryPath + '/test.txt';

                // write the file
                RNFS.writeFile(path, contents, 'utf8')
                    .then((success) => {
                        console.log('FILE WRITTEN!', success);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
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

            <Button title='Download section' onPress={buttonHandler} />
            <View style={styles.empty} />
            <View style={styles.container}>
                <Button
                    title='Download handbook' onPress={buttonHandler}
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