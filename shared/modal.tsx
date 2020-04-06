import React from 'react';
import { Text, View, Modal, TouchableHighlight, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';

interface IProps{
    modalName:string,
    modalVisible: boolean,
    setModalVisible: (bool: boolean) => void
}
export const MyModal: React.FC<IProps> = ({ modalVisible, setModalVisible, children, modalName }) => {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Review Created");
                }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon 
                                        name='close'
                                        size={20}
                                    />
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </View>
                            </TouchableHighlight>
                            <Text style={styles.modalText}>Please fill out all fields</Text>
                            {children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name='add'
                        size={20}
                    />
                    <Text style={styles.textStyle}>Add {modalName}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        //justifyContent: "center",
        // alignItems: "center",
        marginTop: 22
    },
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
