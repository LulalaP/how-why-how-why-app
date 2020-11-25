/* eslint-disable object-curly-newline */
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';

import { CREATE_ARTICLE } from '../graphql/mutations';

const useCreateArticle = () => {
  const history = useHistory();
  const [mutate, result] = useMutation(CREATE_ARTICLE);

  const createArticle = async ({ title, titleEn, description, text }) => {
    mutate({ variables: { title, titleEn, description, text } });
    history.push('/');
  };

  return [createArticle, result];
};

export default useCreateArticle;
