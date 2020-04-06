import React from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import { globalStyles } from '../styles/global';

export const About: React.FC = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.headerText}>
                Mobile Hand BOok
            </Text>

            <Text>
                Written in ReactNative.
                Includes modal, drawer navigation and form validation.
            </Text>

            <Text style={styles.linkText}>
                {"\n"}You can use it [here]
            </Text>
            <View>
                <Image source={require('../assets/screenshots/review_natively.jpg')} style={styles.image} />
            </View>
            <Text style={styles.headerText}>
                {"\n"}Summary
            </Text>
            <Text>
                3.3.20
            </Text>

            <Text>
                {'    '}I began participating in a 'Software Development Mastermind' mentorship program towards the
                end of 2019. The purpose of the program is to strengthen and expand my skills as a Full Stack
                developer. The completed work is showcased on my GitHub and portfolio/personal website.

                {"\n"}{'    '}This Review Natively mobile app is a side project I created while learning Ractive Native.
                and deploy.

                {"\n"}{'    '}My ultimate goal is to land a job that incorporates my skills and utilizes my abilities and outgoing
                personality. So if you enjoyed reviewing my code as much as I did writing it, please find me on one of the
                links provided below.{"\n"}
            </Text>

            <Text style={styles.headerText}>
                Installation Instructions
            </Text>

            <Text>
                1. Download Repository{"\n"}
                2. Using command line, run 'npm start' from root directory{"\n"}
                3. In browser, use QR scanner (must have Expo App downloaded) {"\n"}
            </Text>

            <Text style={styles.headerText}>
                Author
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                <Text style={styles.boldText}>
                    Jonathan Hirshowitz
                </Text>
                <Text style={styles.slantedText}>
                    - Full-Stack Software Developer -
                </Text>
                <Text style={styles.linkText}
                    onPress={() => Linking.openURL('https://jonathan-hirshowitz-portfolio.firebaseapp.com/')}>
                    Website{'    '}
                </Text>
                <Text style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/jonathan-hirshowitz/')}>
                    LinkedIn
                </Text>
            </View>
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
        letterSpacing: 1
    },
    linkText: {
        color: 'blue'
    },
    boldText: {

        fontWeight: 'bold',
    },
    slantedText: {
        fontStyle: 'italic'
    }

})