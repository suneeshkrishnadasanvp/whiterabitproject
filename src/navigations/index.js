import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from '../scenes/splash';
import AuthRoot from '../scenes/auth';
import UserDetails from '../scenes/UserDetails';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const {userModel: userModelState} = useSelector(({userModel}) => {
    return {
      userModel,
    };
  });
  const {userModel: userModelStateDispatch} = useDispatch(({userModel}) => {
    return {
      ...userModel,
    };
  });
  const {loggedIn, loading} = userModelState;

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="card">
        
          <>
            <Stack.Screen name="AuthRoot" component={AuthRoot} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
          </>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
