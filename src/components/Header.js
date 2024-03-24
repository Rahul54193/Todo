import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../helper/responsiveSize'
import CustomIcon, { ICON_TYPE } from './CustomIcon'
import { WHITE } from '../resources/colors'
import { icNotificationBell, icSplashLogo } from '../resources/imgPath'
import LinearGradient from 'react-native-linear-gradient'
import Spacer from './Spacer'

const Header = ({text,onArrowPress,onBellPress}) => {
    return (
        <LinearGradient colors={['#3A3A3A', '#282828', '#232323']} style={{ height: moderateScale(90), padding: moderateScale(10), flexDirection: 'column-reverse' ,borderBottomLeftRadius:moderateScale(20),borderBottomRightRadius:moderateScale(20)}}>
            {true && <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:moderateScale(10) }}>
                <Pressable onPress={onArrowPress}>
                    <CustomIcon name={'arrow-back'}
                        origin={ICON_TYPE.ICONICONS}
                        color={WHITE}
                    />
                </Pressable>
                <Spacer width={10} />
                <Text style={{ color: WHITE }}>{text?text:'Services'}</Text>
            </View>}
            {false && 
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image style={styles.logoStyle} source={icSplashLogo} />
                    <Pressable onPress={onBellPress}>
                    <Image source={icNotificationBell} />
                    </Pressable>
                </View>
            }
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({
    logoStyle: {
        height: 50,
        width: 100,
    }
})