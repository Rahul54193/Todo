import { View } from 'react-native'
import React from 'react'
import { WHITE } from '../../../resources/colors'
import { Text } from 'react-native-paper'
import { moderateScale } from '../../../helper/responsiveSize'
import CustomInput from '../../../components/CustomInput'
import Spacer from '../../../components/Spacer'
import ButtonComp from '../../../components/ButtonComp'

const ForgotPassword = () => {
  return (
    <View style={{ backgroundColor: WHITE }}>
      <View style={{ justifyContent: "center", padding: moderateScale(20) }}>
        <Text >Enter your email to reset password</Text>
        <Spacer height={50}/>
        <CustomInput
            placeholder="Enter email"
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor={'grey'}
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
            // error={errors?.email && touched?.email}
            // errorText={errors?.email}
          />
          <ButtonComp style={{borderRadius:moderateScale(8)}} text={'send link'}/>
      </View>
    </View>
  )
}

export default ForgotPassword