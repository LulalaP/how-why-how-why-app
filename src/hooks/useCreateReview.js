import { useMutation } from '@apollo/react-hooks';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    articleId, review,
  }) => {
    await mutate({
      variables: {
        // eslint-disable-next-line radix
        articleId, review,
      },
    });
  };

  return [createReview, result];
};

export default useCreateReview;
