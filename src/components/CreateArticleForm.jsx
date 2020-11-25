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
  createArticleBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  createArticleBtnText: {
    color: '#ffffff',
    alignSelf: 'center',
  },
});

const CreateArticleForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput name="title" placeholder="Chinese Title" multiline />
    <FormikTextInput name="titleEn" placeholder="English Title" multiline />
    <FormikTextInput name="description" placeholder="Description" multiline />
    <FormikTextInput name="text" placeholder="Text" multiline />
    <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
      <View style={styles.createArticleBtn}>
        <Text testID="submitButton" style={styles.createArticleBtnText} fontWeight="bold">
          Create
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default CreateArticleForm;
