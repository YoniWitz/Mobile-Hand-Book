import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Pdf from 'react-native-pdf';

export const PdfScreen = () => {
    const source = require('../assets/pdf/document.pdf');
   
    return (
        <View style={{ flex: 1 }}>
            <Pdf
                     source = {{source}}
                    // onLoadComplete={(numberOfPages,filePath)=>{
                    //     console.log(`number of pages: ${numberOfPages}`);
                    // }}
                    // onPageChanged={(page,numberOfPages)=>{
                    //     console.log(`current page: ${page}`);
                    // }}
                    // onError={(error)=>{
                    //     console.log(error);
                    // }}
                    // onPressLink={(uri)=>{
                    //     console.log(`Link presse: ${uri}`)
                    // }}
                    style={styles.pdf}/>
        </View>
    );
}

const styles = StyleSheet.create({
    pdf: {}
})