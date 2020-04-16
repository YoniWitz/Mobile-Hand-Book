import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const PdfViewer: React.FC<IProps> = ({ navigation }) => {
    const page = navigation.getParam('page');
    const pdfUri = navigation.getParam('uri') || 'bundle-assets://pdf/handbook.pdf';
    // const offset = navigation.getParam('offset') || 0;

    const source = { uri: pdfUri, cache: true };

    return (
        <View style={styles.container}>
            <Pdf
                page={page}
                source={source}

                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages} loaded from ${filePath}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`current page: ${page} of ${numberOfPages}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                // onPressLink={(uri) => {
                //     console.log(`Link presse: ${uri}`)
                // }}
                style={styles.pdf} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});