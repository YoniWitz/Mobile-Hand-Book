import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { globalStyles } from '../styles/global';
import { Card } from '../shared/card';
import { content } from '../models/content';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const Home: React.FC<IProps> = ({ navigation }) => {


    return (
        <View style={globalStyles.container}>
            <Text style={styles.textStyle}>Table of Contents (Buttons open PDF)</Text>
            <FlatList numColumns={1}
                data={content}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity >
                            <Card>
                                <Text onPress={() => navigation.navigate('Pdf', item)}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                        <FlatList numColumns={1}
                            data={item.subContent}
                            renderItem={({ item, index }) => (
                                <View style={{ marginVertical: 1 }}>
                                    <Button title={item.title} onPress={() => navigation.navigate('Pdf', item)} />
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
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "orange",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    }
})
