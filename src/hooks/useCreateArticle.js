/* eslint-disable object-curly-newline */
import { useMutation } from '@apollo/react-hooks';

import { CREATE_ARTICLE } from '../graphql/mutations';

const useCreateArticle = () => {
  const [mutate, result] = useMutation(CREATE_ARTICLE);

  const createArticle = async ({ title, titleEn, description, text }) => {
    mutate({ variables: { title, titleEn, description, text } });
  };

  return [createArticle, result];
};

export default useCreateArticle;
