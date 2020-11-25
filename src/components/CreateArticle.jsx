/* eslint-disable object-curly-newline */
import React from 'react';
import useCreateArticle from '../hooks/useCreateArticle';
import CreateArticleContainer from './CreateArticleContainer';

const initialValues = {
  title: '',
  titleEn: '',
  desciption: '',
  text: '',
};

const CreateArticle = () => {
  const [createArticle] = useCreateArticle();

  const onSubmit = async (values) => {
    const { title, titleEn, description, text } = values;

    try {
      await createArticle({ title, titleEn, description, text });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <CreateArticleContainer initialValues={initialValues} onSubmit={onSubmit} />
  );
};

export default CreateArticle;
