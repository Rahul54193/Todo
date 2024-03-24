import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../helper/responsiveSize'
import CustomIcon, { ICON_TYPE } from './CustomIcon'
import { BLACK, WHITE } from '../resources/colors'

const BackHeader = ({onBackPress}) => {
  return (
    <View style={{backgroundColor:'transparent',padding:moderateScale(16)}}>
      <Pressable onPress={onBackPress}>
     <CustomIcon
     name={'arrow-back'}
     origin={ICON_TYPE.ICONICONS}
     color={BLACK}
     
     />
     </Pressable>
    </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({})