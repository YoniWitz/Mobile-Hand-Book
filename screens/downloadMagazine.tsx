import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { requestDownloadPermission } from '../shared/pdfDownload';
import { CarouselView } from '../shared/carouselView';

export const DownloadMagazine: React.FC = () => {
    const images = [
        { caption: "1. Introduction", source: require('../assets/images/2.jpg') },
        { caption: "2. whatever1", source: require('../assets/images/3.png') },
        { caption: "3. whatever2", source: require('../assets/images/4.jpg') },
        { caption: "4. whatever4", source: require('../assets/images/5.jpg') },
        { caption: "5. whatever5", source: require('../assets/images/1.jpg') }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.empty} />
            <CarouselView images={images} />

            <Button
                color="orange"
                title='Download section'
                onPress={() => requestDownloadPermission("http://www.africau.edu/images/default/sample.pdf")}
            />
            <View style={styles.empty} />
            <View style={styles.container}>
                <Button
                    color="orange"
                    title='Download handbook'
                    onPress={() => requestDownloadPermission("http://www.africau.edu/images/default/sample.pdf")}
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