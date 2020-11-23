import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLE } from '../graphql/queries';

const useSingleArticle = (variables) => {
  const {
    data, fetchMore, refetch, loading, ...result
  } = useQuery(GET_ARTICLE, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.article.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_ARTICLE,
      variables: {
        after: data.article.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          article: {
            ...fetchMoreResult.article,
            edges: [
              ...previousResult.article.reviews.edges,
              ...fetchMoreResult.article.reviews.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    article: data ? data.article : undefined,
    fetchMore: handleFetchMore,
    refetch,
    loading,
    ...result,
  };
};

export default useSingleArticle;
