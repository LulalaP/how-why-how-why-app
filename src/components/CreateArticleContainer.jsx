import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateArticleForm from './CreateArticleForm';

const validationSchema = yup.object().shape({
  title: yup
    .string().min(1).max(140)
    .required('Title is required'),
  titleEn: yup
    .string().min(1).max(140)
    .required('English title is required'),
  description: yup
    .string().min(1).max(1000)
    .required('Description is required'),
  text: yup
    .string().min(1).max(5000)
    .required('Text is required'),
});

const CreateArticleContainer = ({ initialValues, onSubmit }) => (
  <View>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateArticleForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default CreateArticleContainer;
