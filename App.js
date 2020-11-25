import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const Drawer = createDrawerNavigator();

function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hey there!</Text>
    </View>
  );
}

function Article() {
  return (
    <Main />
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

const App = () => (
  <NativeRouter>
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  </NativeRouter>
);

export default App;
