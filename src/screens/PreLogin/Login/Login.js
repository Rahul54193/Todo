import { View, Text, Image, Pressable, Alert, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import { Checkbox, TextInput } from 'react-native-paper'
import { BLACK, DARK_GRAY, PRIMARY, WHITE } from '../../../resources/colors'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../helper/responsiveSize'
import CustomIcon, { ICON_TYPE } from '../../../components/CustomIcon'
import Spacer from '../../../components/Spacer'
import { icFaceId, icNotificationBell, icSplashLogo, icWalkFirst } from '../../../resources/imgPath'
import ButtonComp from '../../../components/ButtonComp'
import OrLineComp from '../../../components/OrLineComp'
import fonts from '../../../resources/fonts'
import CustomInput from '../../../components/CustomInput'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { RoutesName } from '../../../helper/strings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { account } from '../../../appwrite/AppwriteConfig'
import { showError } from '../../../helper/helperFunctions'
import SharedPreference from '../../../helper/SharedPreference'
import { useDispatch } from 'react-redux'
import { storeUserDetail } from '../../../store/authSlice/auth.slice'

const Login = (props) => {
  const [loginLoder,setLoginLoader] = useState(false)
  const dispatch = useDispatch()
  // db id = 65ff33dba432313c7cbf
  //colo id = 65ff343e4704d9653de8
  // initial value
  const initialValues = {
    phone: '',
    password: '',
  };
  // login
  const logIn = async (email, password) => {
    try {
      setLoginLoader(true)
      const res = await account.createEmailPasswordSession(email, password)
      if (res) {
        SharedPreference.setItem(SharedPreference.keys.USER_DATA, JSON.stringify(res)).then(res => console.log(res, 'local res details'))
        dispatch(storeUserDetail(res))
      }
      console.log(res, 'App res login')
      setLoginLoader(false)
    } catch (error) {
      setLoginLoader(false)
      showError(String(error))
      console.log(error, 'App write error log in ')
    }

  }
  // validation
  //Validation Schema for formik
  const validationSchema = Yup.object({
    phone: Yup.string()
      .required('Email is required.')
      .email('Please enter a valid email.'),
    password: Yup.string().trim()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .max(15, ({ max }) => `Password must not exceed ${max} characters`)
      .required('Required*')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*_])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.',
      ),
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    resetForm,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (val, { setErrors }) => {
      console.log('fsdfdsjfksdfklskl---<<<<<')
      try {
        Keyboard.dismiss();
        logIn(val?.phone, val?.password).then((res) => {
          console.log(res, 'res++++++++s')
        })
      } catch (err) {
        console.log(err, 'err++++')
        // setErrors({ serverError: err.message });
        // setButtonDisabled(false);
      }
    },
  });
  const logInPressed = () => {
    Alert.alert('Login pressed.')
  }
  const forgotPassClicked = () => {
    props.navigation.navigate(RoutesName.FORGOT_PASSWORD_SCREEN)
  }
  const faceIdClicked = () => {
    Alert.alert('face id clicked.')
  }
  const CreateAccountClicked = () => {
    props.navigation.navigate(RoutesName.SIGNUP_SCREEN)
    resetForm();
    // Alert.alert('CreateAccountClicked')
  }
  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ borderTopLeftRadius: moderateScale(20), borderTopRightRadius: moderateScale(20), padding: 20, }}>
          <Spacer height={10} />
          <Text style={{ fontWeight: '900', fontSize: 28, fontFamily: fonts.extraBold, color: BLACK }}>Welcome</Text>
          <Spacer height={20} />
          <CustomInput
            placeholder="Email"
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor={'grey'}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            error={errors?.phone && touched?.phone}
            errorText={errors?.phone} />
          {/* <CustomInput
                  secureTextEntry={true}
                  placeholder="Password"
                  keyboardType="email-address"
                  returnKeyType="next"
                  placeholderTextColor={'grey'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors?.password && touched?.password}
                  errorText={errors?.password}/> */}
          <CustomInput
            eyeColor={PRIMARY}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor={'grey'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors?.password && touched?.password}
            errorText={errors?.password}
          />
          {/* <Spacer height={10} />
          <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
            <View />
            <Text onPress={forgotPassClicked} style={{ color: PRIMARY }}>Forgot Password?</Text>
          </View> */}
          {/* <Spacer height={20} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox status='checked' color={PRIMARY} />
            <Spacer width={4} />
            <Text style={{ color: PRIMARY }}>Keep me logged in</Text>
          </View> */}
          <Spacer height={20} />
          <View style={{ marginBottom: moderateScaleVertical(16) }} >
            <ButtonComp loading={loginLoder} style={{ borderRadius: 8, }} text={'Log In'} onPress={handleSubmit} />
          </View>
          <View style={{ justifyContent: 'space-between', }}>
            <View />
            <Text onPress={CreateAccountClicked} style={{ color: PRIMARY }}>Create account</Text>
          </View>
          <Spacer height={10} />
          {/* <OrLineComp />
          <Spacer height={20} />
          <View style={{ alignItems: "center", justifyContent: 'center' }}>
            <Pressable style={{ alignItems: "center", justifyContent: 'center' }} onPress={faceIdClicked}>
              <Image source={icFaceId} />
              <Spacer height={10} />
              <Text style={{ color: DARK_GRAY, fontSize: textScale(15), fontWeight: "600" }}>Setup face ID</Text>
            </Pressable>
          </View> */}
        </View>



      </KeyboardAwareScrollView>



    </WrapperContainer>
  )
}

export default Login
const styles = StyleSheet.create({
  logoStyle: {
    height: 50,
    width: 100,
  }
})