import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export const Letter: React.FC = () => {
    return (
        <View style={globalStyles.container}>
            <View>
                <Image source={require('../assets/images/CEO.png')} />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Text>
                        {'    '}Allow me to extend a warm welcome on behalf of The Child Center of NY! As one of
                        our new employees, you’ll be joining a passionate and dedicated group of people who
                        help thousands of children and families achieve their full potential each year. In 1953,
                        The Child Center founded its first children’s counseling center in Queens, serving 88
                        children on a budget of $3,000 a year. Today we serve 21,700 children each year in
                        70 locations and in 22 languages. Our employees are here for children and families
                        during important life milestones and in their times of greatest need, whether it’s helping a child get a great
                        start in preschool, counseling a family through a time of crisis, or empowering youth to dream and
                        achieve.

                        {"\n"}{'    '}When I made the decision to join The Child Center, the mission of this organization and our employees’
                        dedication to that mission drew me here. I saw The Child Center’s impact on children and families,
                        thanks to the passion and professionalism of our amazing employees. Every role is vital to our partnership
                        with families.{"\n"}

                        {'    '}We hear about the difference you make through our clients:

                        {"\n"}{'    '}“My therapist helped me come to terms with who I am. She made sure I had plenty of ways to cope. She
                        helped me find hope and save my own life.”

                        {"\n"}{'    '}“My home visitor from The Child Center of NY helped me to survive ... My children are coping better
                        with their father’s death. I am better able to help my children.”

                        {"\n"}“When I first met my therapist, we just had that instant connection. I felt that I could always confide in
                        her. Because of her I was inspired to do more with myself and make not only her but everyone who
                        helped me along the way proud of me. She changed my life forever and because of her I am forever
                        grateful to The Child Center of NY.”

                        {"\n"}The Child Center is more than an agency—it’s a community. Our board president, Dick Jay, joins me in
                        welcoming you, and says on behalf of our board, “We consider our involvement with this organization
                        and with these kids to be a gift to every one of us.”

                        {"\n"}Thank you for joining us

                        {"\n"}Traci Donnelly

                        {"\n"}President & CEO
                    </Text>
                    <View>
                        <Image source={require('../assets/images/CEOsignature.png')} style={styles.image} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {


        marginHorizontal: 10,
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