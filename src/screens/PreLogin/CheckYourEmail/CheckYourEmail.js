import { Alert, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import { BLACK, BLACK_GRAY, PRIMARY, WHITE } from '../../../resources/colors'
import IconButton from '../../../components/IconButton'
import CustomIcon, { ICON_TYPE } from '../../../components/CustomIcon'
import { icPlane } from '../../../resources/imgPath'
import Spacer from '../../../components/Spacer'
import { moderateScale } from '../../../helper/responsiveSize'
import { Text } from 'react-native-paper'
import ButtonComp from '../../../components/ButtonComp'
import OrLineComp from '../../../components/OrLineComp'
import { RoutesName } from '../../../helper/strings'

const CheckYourEmail = (props) => {
    const LogInPressed = () => {
        props.navigation.navigate(RoutesName.LOGIN_SCREEN)
    }
    return (
        <WrapperContainer >
            <View style={{ backgroundColor: PRIMARY, flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: moderateScale(20) }}>
                <IconButton backgroundColor={WHITE} icon={<Image source={icPlane} />} />
                <Spacer height={moderateScale(10)} />
                <Text style={{ color: WHITE, fontSize: moderateScale(24), fontWeight: '800' }}>Check your email</Text>
                <Spacer height={moderateScale(10)} />
                <Text style={{ textAlign: 'center', color: WHITE }} >
                    {`To confirm your email address,\ntab the verification link in the email\nwe sent you`}
                </Text>
                <Spacer height={moderateScale(20)} />
                <ButtonComp style={{ backgroundColor: WHITE, borderRadius: moderateScale(4), width: '90%' }} text={'Continue'} textColor={BLACK_GRAY} />
                <Spacer height={moderateScale(20)} />
                <OrLineComp lineColor={WHITE} orColor={WHITE} />
                <Spacer height={moderateScale(10)} />
                <Text onPress={LogInPressed} style={{ textAlign: 'center', color: WHITE, fontWeight: '700' }} >
                    {`Login to your account`}
                </Text>
            </View>

        </WrapperContainer>
    )
}

export default CheckYourEmail

const styles = StyleSheet.create({})