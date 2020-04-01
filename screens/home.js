import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import MyModal from '../shared/modal';
import ReviewForm from '../screens/reviewForm';

export default Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: "lorem ipsum", key:'1'},
        { title: 'Gotta', rating: 4, body: "lorem ipsum", key:'2'},
        { title: 'Not', rating: 3, body: "lorem ipsum" , key:'3'}
    ]);

    useEffect(() =>
    {
        setModalVisible(false);
    }, [reviews])

    const handleFormSubmit = (review) => {
        review.key=reviews[reviews.length - 1].key + 1;
        setReviews([...reviews, review]);
        
    }

    return (
        <View style={globalStyles.container}>
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} modalName='Review'>
                <ReviewForm handleFormSubmit={handleFormSubmit} />
            </MyModal>
            <FlatList numColumns={1}
                data={reviews}
                renderItem={({ item, index }) => (
                    <View>
                        <Card>
                            <Text>{item.title}</Text>
                        </Card>
                        <Button onPress={() => navigation.navigate('ReviewDetails', item)} title='review details' />
                    </View>
                )
                } />
        </View>
    )
}

const styles = StyleSheet.create({

})