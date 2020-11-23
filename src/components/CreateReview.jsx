import React from 'react';
import useCreateReview from '../hooks/useCreateReview';
import useSingleArticle from '../hooks/useSingleArticle';
import CreateReviewContainer from './CreateReviewContainer';

const initialValues = {
  review: '',
};

const CreateReview = ({ articleId }) => {
  const [createReview] = useCreateReview();
  const variables = {
    id: articleId,
    first: 8,
  };
  const { refetch } = useSingleArticle(variables);

  const onSubmit = async (values) => {
    const { review } = values;

    try {
      await createReview({
        articleId, review,
      });
      refetch();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <CreateReviewContainer initialValues={initialValues} onSubmit={onSubmit} />
  );
};

export default CreateReview;
