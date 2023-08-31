import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Home from './MovieApp/Screen/Home';
import Login from './MovieApp/Screen/Login';
import Register from './MovieApp/Screen/Register';
import Profile from './MovieApp/Screen/Profile';
import BottomTab from './MovieApp/navigations/BottomTab';
import DetailsScreen from './MovieApp/Screen/DetailsScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './store';
import LoadingScreen from './MovieApp/components/LoadingScreen';
// import LoginIn from './TestScreen/LoginIn';
// import Register from './TestScreen/Register';
// import Home from './TestScreen/Home';
// import LoginIn from './TestScreen/LoginIn';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#121212',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="bottomTab" component={BottomTab} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

// <NavigationContainer>
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//     <Stack.Screen name="LoginIn" component={LoginIn} />
//     <Stack.Screen name="Register" component={Register} />
//     <Stack.Screen name="Home" component={Home} />
//   </Stack.Navigator>
// </NavigationContainer>
