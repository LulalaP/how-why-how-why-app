import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleArticle from '../hooks/useSingleArticle';
import ArticleInfo from './ArticleInfo';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleArticleItem = () => {
  const { id } = useParams();

  const variables = {
    id,
    first: 8,
  };
  const { article, fetchMore } = useSingleArticle(variables);
  if (article === undefined) return null;

  const { reviews } = article;

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem item={item} />}
      // eslint-disable-next-line no-shadow
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <ArticleInfo article={article} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleArticleItem;
