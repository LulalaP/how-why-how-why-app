import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import ArticleList from './ArticleList';
import SingleArticleItem from './SingleArticleItem';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => (
  <View style={styles.container}>
    <AppBar />
    <Switch>
      <Route path="/articles/:id" exact>
        <SingleArticleItem />
      </Route>
      <Route path="/articles/:id/createreview" exact>
        <CreateReview />
      </Route>
      <Route path="/" exact>
        <ArticleList />
      </Route>
      <Route path="/myreviews" exact>
        <MyReviews />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Redirect to="/" />
    </Switch>
  </View>
);

export default Main;
