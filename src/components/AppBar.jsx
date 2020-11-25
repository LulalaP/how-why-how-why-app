/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/react-hooks';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  flexContainer: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexItemA: {
    flexGrow: 1,
    paddingRight: 20,
  },
  scrollView: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const history = useHistory();
  const { authorizedUser } = useAuthorizedUser();

  const routeTabPress = useCallback((path) => {
    history.push(path);
  }, []);

  const signOut = useCallback(async (path) => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push(path);
  }, []);

  function Articles() {
    return (
      <View style={styles.flexItemA}>
        <Link to="/" text="Articles" path="/" cb={routeTabPress} component={AppBarTab} />
      </View>
    );
  }

  function MyReviews() {
    return (
      <View style={styles.flexItemA}>
        {authorizedUser && (
        <Link to="/myreviews" text="My reviews" path="/myreviews" cb={routeTabPress} component={AppBarTab} />
        )}
      </View>
    );
  }

  function CreateArticle() {
    return (
      <View style={styles.flexItemA}>
        {authorizedUser && (
        <Link to="/create_article" text="Create Article" path="/create_article" cb={routeTabPress} component={AppBarTab} />
        )}
      </View>
    );
  }

  function SignIn() {
    return (
      <View style={styles.flexItemA}>
        {authorizedUser === null && (
        <Link to="/signin" text="Sign in" path="/signin" cb={routeTabPress} component={AppBarTab} />)}
        {authorizedUser && (
          <AppBarTab text="Sign out" path="/" cb={signOut} />
        )}
      </View>
    );
  }

  function SignUp() {
    return (
      <View style={styles.flexItemA}>
        {authorizedUser === null && (
        <Link to="/signup" text="Sign up" path="/signup" cb={routeTabPress} component={AppBarTab} />)}
      </View>
    );
  }

  return (
    <View style={styles.flexContainer}>
      <ScrollView style={styles.scrollView} horizontal>
        <Articles />
        <CreateArticle />
        <MyReviews />
        <SignIn />
        <SignUp />
      </ScrollView>
    </View>
  );
};

export default AppBar;
