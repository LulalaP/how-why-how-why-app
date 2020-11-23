import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';

import theme from '../Theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#ffffff',
    padding: 15,
  },
  Btn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  BtnText: {
    color: '#ffffff',
    alignSelf: 'center',
  },
});

const CreateReviewForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput testID="reviewField" name="review" placeholder="Review" multiline />
    <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
      <View style={styles.Btn}>
        <Text testID="submitButton" style={styles.BtnText} fontWeight="bold">
          Create a review
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default CreateReviewForm;
