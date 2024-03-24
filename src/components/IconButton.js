import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { moderateScale } from '../helper/responsiveSize'

const IconButton = ({ backgroundColor, icon }) => {
    return (
        <View style={{ height: moderateScale(80), width: moderateScale(80), borderRadius: moderateScale(40), backgroundColor: backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
            {icon}
        </View>
    )
}

export default IconButton

const styles = StyleSheet.create({})