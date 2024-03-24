import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Login, Signup,TermsAndConditions } from '../../screens';
import { StyleSheet, Text, View } from 'react-native'
import { RoutesName } from '../../helper/strings';
import CheckYourEmail from '../../screens/PreLogin/CheckYourEmail/CheckYourEmail';

const PreLoginNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={RoutesName.LOGIN_SCREEN}
        component={Login}
      />
      <Stack.Screen
        name={RoutesName.SIGNUP_SCREEN}
        component={Signup}
      />
      <Stack.Screen
        name={RoutesName.FORGOT_PASSWORD_SCREEN}
        component={ForgotPassword}
      /> 
      <Stack.Screen
        name={RoutesName.EMAIL_VERIFICATION}
        component={CheckYourEmail}
      />
      <Stack.Screen name={RoutesName.TERM_AND_CONDITION_SCREEN} component={TermsAndConditions} />

    </Stack.Navigator>
  )
}

export default PreLoginNavigator

const styles = StyleSheet.create({})