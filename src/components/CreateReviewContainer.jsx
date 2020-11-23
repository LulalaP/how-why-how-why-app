import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';

const validationSchema = yup.object().shape({
  review: yup
    .string()
    .required('Review is required'),
});

const CreateReviewContainer = ({ initialValues, onSubmit }) => (
  <View>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default CreateReviewContainer;
