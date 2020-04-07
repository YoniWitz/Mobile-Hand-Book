import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';
import { IReview } from '../models/IReview';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('isbetween1to5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

interface IProps {
    handleFormSubmit: (review: IReview) => void
}

export const ReviewForm: React.FC<IProps> = ({ handleFormSubmit }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.modalText}>Please fill out all fields</Text>
            <Formik
                initialValues={{ title: '', body: '', rating: '', key: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values: IReview, options) => {
                    options.resetForm();
                    handleFormSubmit(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Title"
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Body"
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        <Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>
                        <Button onPress={handleSubmit} title="Submit" color='maroon' />
                    </View>
                )}
            </Formik>
        </View>)
}
const styles = StyleSheet.create({
    modalText: {
          marginBottom: 15,
          textAlign: "center"
      }
  })