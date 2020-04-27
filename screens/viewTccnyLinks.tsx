import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { globalStyles } from '../styles/global';
import { Card } from '../shared/card';
import { tccnyLinks } from '../models/tccnyLinks';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const ViewTccnyLinks: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.textStyle}>TCCNY Links</Text>
            <FlatList numColumns={1}
                keyExtractor={(item, index) => '' + index}
                data={tccnyLinks}
                renderItem={({ item, index }) => (
                    <View>
                        <Card>
                            <TouchableOpacity >
                                <Text
                                    onPress={() => Linking.openURL(item.url)}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        </Card>
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
    }
})
