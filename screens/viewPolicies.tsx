import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { globalStyles } from '../styles/global';
import { Card } from '../shared/card';
import { policies } from '../models/policies';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const ViewPolicies: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.textStyle}>Choose Policy (Buttons open PDF)</Text>
            <FlatList numColumns={1}
                keyExtractor={(item, index) => '' + index}
                data={policies}
                renderItem={({ item, index }) => (
                    <View>
                        <Card>
                            <TouchableOpacity >
                                <Text onPress={() => navigation.navigate('Pdf', item)}>{item.title}</Text>
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
