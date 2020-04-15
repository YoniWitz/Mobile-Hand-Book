import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import { MyModal } from '../shared/myModal';
import { Letter } from './letter';

export const About: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={globalStyles.container}>
            <MyModal modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                modalName='Letter From The President &CEO'
            >
                <Letter />
            </MyModal>
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.headerText}>
                    WELCOME
            </Text>

                <Text>
                    {'    '}For those of you who are starting employment with The Child Center of NY (“us”, “we” or the
                “Agency”), let us extend a warm and sincere welcome. We hope you will enjoy working here.
                For those of you, who have been with us over the years, thank you for your hard work.
                -not many other employee handbooks acknowledge current workers so I think this part stands out
                a lot.

                {"\n"}{'    '}We prepared this Handbook to assist you in finding answers to many of the most frequently
                asked questions regarding personnel policies, compensation, and benefits. Of course, feel free to
                ask your supervisor or Human Resources any questions regarding your employment.{"\n"}

                    {'    '}The contents of this Handbook are guidelines only, and supersede any prior Handbook. Neither
                this Handbook nor any other Agency guidelines, policies, or practices creates an employment
                contract, bargain, or agreement or confers any contractual rights whatsoever. Subject to any
                limitations pursuant to any applicable collective bargaining agreement (“CBA”), the Agency has
                the right, with or without notice, in an individual case or generally, to change and/or modify its
                interpretation of any of its guidelines, policies, practices, working conditions, or benefits at any
                time. Nothing in this Handbook should be construed as a promise of specific treatment in any
                specific situation upon which any employee should rely. Additionally, many matters covered by
                this Handbook, such as employee benefits, are also described in separate official documents
                which may be accessible through our online handbook via hyperlinks. Such official documents
                are always controlling over any statement made in this Handbook or by any supervisor or
                manager.

                {"\n"}{'    '}Subject to any limitations pursuant to any applicable CBA, employment with the Agency is atwill, and either the employee or the Agency may terminate employment at any time, with or
                without cause or reason. No representative of the Agency is authorized to provide any employee,
                individually or on a collective basis, with an employment contract or special arrangement
                concerning the terms or conditions of employment unless the contract or agreement is in writing
                and signed by the Chief Executive Officer (“CEO”). This notice applies to all employees
                regardless of date of hire.

                {"\n"}{'    '}Employees covered by a CBA should review the applicable CBA for additional information
                related to the terms and conditions of their employment. Should the language in this handbook
                contradict or in any way conflict with the terms of the CBA, the terms of the CBA will govern.

                {"\n"}We look forward to working together and continuing to work together{"\n"}
                </Text>
            </ScrollView>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 50,
        marginHorizontal: 10,
        marginVertical: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    linkText: {
        color: 'yellow'
    },
    boldText: {
        fontWeight: 'bold',
    },
    slantedText: {
        fontStyle: 'italic'
    }

})