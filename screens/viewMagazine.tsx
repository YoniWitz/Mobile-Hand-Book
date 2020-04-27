import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { globalStyles } from '../styles/global';
import { Card } from '../shared/card';
import { magazineContent } from '../models/magazineContent';
import { requestDownloadPermission } from '../shared/pdfDownload';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const ViewMagazine: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.download}
                onPress={() => requestDownloadPermission("https://tccny-bucket.s3.amazonaws.com/handbook.pdf")}>
                Download Magazine
            </Text>
            <Text style={styles.textStyle}>Table of Contents (Buttons open PDF)</Text>
            <FlatList numColumns={1}
                keyExtractor={(item, index) => '' + index}
                data={magazineContent}
                renderItem={({ item, index }) => (
                    <View>
                        <Card>
                            <TouchableOpacity >
                                <Text onPress={() => navigation.navigate('PdfViewer', item)}>{item.title}</Text>
                            </TouchableOpacity>
                        </Card>
                        <FlatList numColumns={1}
                            data={item.subContent}
                            keyExtractor={(item, index) => '' + index}
                            renderItem={({ item, index }) => (
                                <View style={{ marginVertical: 1 }}>
                                    <Button
                                        color="orange"
                                        title={item.title}
                                        onPress={() => navigation.navigate('PdfViewer', item)}
                                    />
                                </View>
                            )}
                        />
                    </View>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "yellow",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    download: {
        color: "orange",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "yellow",
        marginBottom: 20,
        padding: 10,
        elevation: 2
    }
})
