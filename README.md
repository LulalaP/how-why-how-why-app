# How-Why-How-Why React Native App

This is a React Native App( just a very simple demo ) for the How Why How Why application. The relative Node.js backend is here: [how-why-how-why-backend](https://github.com/LulalaP/how-why-how-why-backend)

## ✔️ Requirements

Node (versions `12.X.X` are tested, but later versions _might_ work as well) and npm. If you haven't installed Node or npm, [nvm](https://github.com/nvm-sh/nvm) is an easy to use tool for installing both. Nvm is also handy if you want to quickly switch between different Node versions.

## 🚀 Getting started

1. Install `how-why-how-why-backend` by following the instructions in the [documentation](https://github.com/LulalaP/how-why-how-why-backend).

2. Clone this repository and run `npm install` in the `how-why-how-why-app` directory.

3. Install Expo: `npm install --global expo-cli`.

4. To get started, install the Expo mobile app by following the instructions in the [Expo's documentation](https://docs.expo.io/versions/latest/get-started/installation/#2-mobile-app-expo-client-for-ios). Note that the Expo mobile app can only open your application if your mobile device is connected to *the same local network* (e.g. connected to the same Wi-Fi network) as the computer you are using for development.

   When the Expo mobile app has finished installing, open it up. Next, if the Expo development tools is not already running, start it by running `npm start`. In the bottom left corner of the development tools, you should be able to see a QR code. Within the Expo mobile app, press *Scan QR Code* and scan the QR code displayed in the development tools. The Expo mobile app should start building the JavaScript bundle and after it is finished you should be able to see your application. Now, every time you want to reopen your application in the Expo mobile app, you should be able to access the application without scanning the QR code by pressing it in the *Recently opened* list in the *Projects* view.

## 📖 Documentation

GraphQL playground offers documentation on how to use the API. Start the server by running `npm start`, open the GraphQL playground at http://localhost:5000/graphql and click the "docs" tab.

1. When not logged in,  you can see the full article list.  When you scroll down, the list will load more items automatedly. And you can filter articles by Chinese or English search keyword.

   | Home                                                         | Scroll down to load more                                     |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | <img src="/img/Home.png" alt="Article" style="zoom: 33%;" /> | <img src="/img/Home2.png" alt="Home2" style="zoom: 33%;" />  |
   | Search article by English title                              | Search article by Chinese title                              |
   | <img src="/img/SearchBar1.png" alt="SearchBar1" style="zoom: 33%;" /> | <img src="/img/SearchBar2.png" alt="SearchBar2" style="zoom: 33%;" /> |

2. You can choose sign in an exist account or sign up for a new account.

   | Sign in form                                                 | Sign up form                                                 |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | <img src="/img/SignIn.png" alt="Sign In" style="zoom: 33%;" /> | <img src="/img/SignUp.png" alt="Sign In" style="zoom: 33%;" /> |

   

   1. When logged in, the `Create Article` and `My reviews` App Navigation will show to the app bar. You can create new article and see your reviews. You will be routed to the article when you press the `view article `button. You can delete single review by the `Delete review` button. 

   | Create Article                                               | My reviews                                                   |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | <img src="/img/CreateArticle.png" alt="Create Article" style="zoom: 33%;" /> | <img src="/img/MyReviews.png" alt="My reviews" style="zoom: 33%;" /> |

3. When you tap single article from article list, you will be routed to that single article. And you can create new review here. 

   | Single Article                                               | Create review                                                |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | <img src="/img/ArticleInfo.png" alt="Article Info" style="zoom: 33%;" /> | <img src="/img/CreateReview.png" alt="Create reviews" style="zoom: 33%;" /> |

4. You can pull the side drawer out. 

   | Pull the drawer out                                          | The drawer                                                   |
   | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | <img src="/img/Drawer1.png" alt="Drawer" style="zoom: 33%;" /> | <img src="/img/Drawer2.png" alt="Drawer" style="zoom: 33%;" /> |



## 🐛 Found a bug?

Submit an issue with the bug description and a way to reproduce the bug. If you have already come up with a solution, we will gladly accept a pull request.

