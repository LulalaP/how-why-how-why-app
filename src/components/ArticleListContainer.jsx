import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ArticleItem from './ArticleItem';
import { PickerSelect } from './PickerSelect';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

class ArticleListContainer extends React.Component {
  renderItem = ({ item }) => (
    <ArticleItem item={item} />
  );

  renderHeader = () => {
    const { setOrderBy, searchValue, handleSearch } = this.props;

    return (
      <>
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
        <PickerSelect setOrderBy={setOrderBy} />
      </>
    );
  }

  render() {
    const { articles, onEndReach } = this.props;
    if (articles === undefined) return null;

    const articleNodes = articles.edges
      ? articles.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        testID="ArticleListContainer"
        data={articleNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default ArticleListContainer;
