import React from 'react';
import { useHistory } from 'react-router-native';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, Image,
} from 'react-native';
import { format } from 'date-fns';
import theme from '../Theme';

import useDeleteReview from '../hooks/useDeleteReview';

const imgURL = 'https://images.unsplash.com/photo-1605738862138-6704bedb5202?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },
  flexContainerB: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
  },
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  nameText: {
    marginBottom: 4,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
  dateText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
    padding: 5,
  },
  tinyLogo: {
    width: 120,
    height: 70,
    marginRight: 20,
    marginLeft: 20,
  },
  viewButton: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  deleteButton: {
    padding: 15,
    margin: 15,
    backgroundColor: '#d73a4a',
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});

const MyReviewItem = ({ item, refetch }) => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  if (!item) return null;
  const date = format(new Date(item.createdAt), 'dd.MM.yyyy');

  const handleViewArticle = () => {
    history.push(`/articles/${item.articleId}`);
    return true;
  };

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          // eslint-disable-next-line no-console
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const { id } = item;
            await deleteReview({ id });
            refetch();
          },
        },
      ],
      { cancelable: false },
    );
    return true;
  };

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
            <Text style={styles.nameText}>{item.article.title}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View>
            <Text>{item.text}</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainerC}>
        <TouchableOpacity onPress={handleViewArticle} activeOpacity={0.8}>
          <View style={styles.viewButton}>
            <Text style={styles.buttonText}>
              View article
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteReview} activeOpacity={0.8}>
          <View style={styles.deleteButton}>
            <Text style={styles.buttonText}>
              Delete review
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyReviewItem;
