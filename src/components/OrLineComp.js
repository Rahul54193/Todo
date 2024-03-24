import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARK_GRAY } from '../resources/colors'
import { textScale, width } from '../helper/responsiveSize'
import fonts from '../resources/fonts'

const OrLineComp = ({ orColor, lineColor, }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
      <View style={{ backgroundColor: lineColor ? lineColor : DARK_GRAY, height: 2, width: '45%'}} />
      <Text style={{ color: orColor ? orColor : DARK_GRAY, fontFamily: fonts.black, fontSize: textScale(18) }}>Or</Text>
      <View style={{ backgroundColor: lineColor ? lineColor : DARK_GRAY, height: 2, width: '45%' }} />
    </View>
  )
}

export default OrLineComp

const styles = StyleSheet.create({})