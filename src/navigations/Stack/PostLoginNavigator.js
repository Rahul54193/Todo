import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesName } from '../../helper/strings'
import { Home, Profile, Myservice, Referral } from '../../screens'
import MainTabNavigator from './MainTabNavigator';
import Dashboard from '../../screens/PostLogin/Dashboard/Dashboard';

const PostLoginNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name={RoutesName.DASHBORD}
        component={Dashboard}
      />
    </Stack.Navigator>
  )
}

export default PostLoginNavigator

const styles = StyleSheet.create({})