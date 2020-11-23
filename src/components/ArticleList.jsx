import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import useArticles from '../hooks/useArticles';
import ArticleListContainer from './ArticleListContainer';

const ArticleList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const ob = orderBy === 'lowest' || orderBy === 'highest'
    ? 'RATING_AVERAGE'
    : 'CREATED_AT';

  const od = orderBy === 'lowest' ? 'ASC' : 'DESC';

  const variables = {
    orderBy: ob,
    orderDirection: od,
    searchKeyword: debouncedSearchValue,
    first: 8,
  };

  const { articles, fetchMore } = useArticles(variables);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <ArticleListContainer
      articles={articles}
      setOrderBy={setOrderBy}
      setSearchValue={setSearchValue}
      handleSearch={handleSearch}
      onEndReach={onEndReach}
    />
  );
};

export default ArticleList;
