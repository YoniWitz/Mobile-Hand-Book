import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { globalStyles } from '../styles/global';
import { Card } from '../shared/card';
import { content } from '../models/content';

interface IProps {
    navigation: NavigationScreenProp<NavigationRoute<null>>
}

export const ViewMagazine: React.FC<IProps> = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.textStyle}>Table of Contents (Buttons open PDF)</Text>
            <FlatList numColumns={1}
                keyExtractor={(item, index) => '' + index}
                data={content}
                renderItem={({ item, index }) => (
                    <View>
                        <Card>
                            <TouchableOpacity >
                                <Text onPress={() => navigation.navigate('Pdf', item)}>{item.title}</Text>
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
                                        onPress={() => navigation.navigate('Pdf', item)} 
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
    }
})
