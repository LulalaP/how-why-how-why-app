import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import theme from '../Theme';
import CountItem from './CountItem';

const imgURL = 'https://images.unsplash.com/photo-1605738862138-6704bedb5202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  languageText: {
    color: 'white',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexContainerB: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    flex: 0.8,
  },
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 10,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    marginBottom: 10,
  },
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});
const ArticleInfo = ({ article }) => {
  const item = article;

  return (
    <View style={styles.container}>
      <View style={styles.flexContainerA}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: imgURL,
            }}
          />
        </View>
        <View style={styles.flexContainerB}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainerC}>
        <CountItem name="likes" count={item.likesCount} />
        <CountItem name="views" count={item.viewsCount} />
        <CountItem name="review" count={item.reviewCount} />
      </View>
    </View>
  );
};

export default ArticleInfo;
