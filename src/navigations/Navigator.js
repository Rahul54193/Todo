import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { isMountedRef, navigationRef } from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import PostLoginNavigator from './Stack/PostLoginNavigator';
import PreLoginNavigator from './Stack/PreLoginNavigator';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const  userDetails = useSelector(store=>store?.authReducer?.userDetails)
  console.log(userDetails,'userDtail')
    useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
      }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <NotificationController /> */}
      {userDetails ? (
        <PostLoginNavigator />
      ) : (
        <PreLoginNavigator />
      )}
    </NavigationContainer>
  )
}

export default Navigator