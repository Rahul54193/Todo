import { View, ScrollView, Image, StyleSheet, Alert, Keyboard, } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { icCarMech, icSignUpBg, icWalkFirst } from '../../../resources/imgPath'
import { height, moderateScale, textScale, width } from '../../../helper/responsiveSize'
import { Checkbox, Text, TextInput } from 'react-native-paper'
import Spacer from '../../../components/Spacer'
import { BLACK_GRAY, PRIMARY, WHITE } from '../../../resources/colors'
import CustomInput from '../../../components/CustomInput'
import ButtonComp from '../../../components/ButtonComp'
import OrLineComp from '../../../components/OrLineComp'
import fonts from '../../../resources/fonts'
import { RoutesName } from '../../../helper/strings'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { account } from '../../../appwrite/AppwriteConfig'
import { showError, showSucess } from '../../../helper/helperFunctions'

const Signup = (props) => {
  const [signUpLoader,setSignupLoader]= useState(false)

  const LogInAccountPressed = () => {
    props.navigation.navigate(RoutesName.LOGIN_SCREEN)
  }
  // register function
  const register = async (name, email, password) => {
    console.log(email,name,password)
    try {
      setSignupLoader(true)
    const res = await account.create('unique()', email, password, name)
      console.log(res, 'res++++appwrite')
      setSignupLoader(false)
    } catch (e) {
      console.log('Appwite :: error ::', e)
      showError(String(e))
      setSignupLoader(false)
    }

  }
  // initial value
  const initialValues = {
    fullName: '',
    email: '',
    password: ''
  };
  // validation
  //Validation Schema for formik
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Required*'),
    password: Yup.string().trim()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .max(15, ({ max }) => `Password must not exceed ${max} characters`)
      .required('Required*')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*_])(?=.{8,})/,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.',
      ),
    email: Yup.string()
      .required('Email is required.')
      .email('Please enter a valid email.'),
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
        Keyboard.dismiss()
        register(val?.fullName,val?.email,val?.password).then((res) => {
          console.log(res, 'Appp write succes')
          resetForm()
          showSucess('Registered successfully,Please login!')
        })

      } catch (err) {
        console.log(err, 'err++++')

      }
    },
  });
  return (
    <WrapperContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: WHITE, borderTopLeftRadius: moderateScale(20), borderTopRightRadius: moderateScale(20), padding: moderateScale(20), }}>
          <Text style={styles.welcomeStyle}>Welcome to</Text>
          <Spacer height={moderateScale(1)} />
          <Text style={styles.jergaStyle}>Todo</Text>
          <CustomInput
            placeholder="Full Name"
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor={'grey'}
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
            error={errors?.fullName && touched?.fullName}
            errorText={errors?.fullName}
          />

          {/* <CustomInput
            s
            placeholder="Enter OTP"
            keyboardType="phone-pad"
            returnKeyType="next"
            placeholderTextColor={'grey'}
          // onChangeText={handleChange('phone')}
          // onBlur={handleBlur('phone')}
          // value={values.phone}
          // error={errors?.phone && touched?.phone}
          // errorText={errors?.phone}
          /> */}


          <CustomInput
            placeholder="Email"
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor={'grey'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors?.email && touched?.email}
            errorText={errors?.email}
          />
          <CustomInput
            eyeColor={PRIMARY}
            secureTextEntry={true}
            placeholder="Create password"
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor={'grey'}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors?.password && touched?.password}
            errorText={errors?.password}
          />

          <Spacer height={10} />
          <ButtonComp loading={signUpLoader} onPress={handleSubmit} style={{ borderRadius: moderateScale(8) }} text={'Create my account'} />
          <Spacer height={20} />
          <OrLineComp />
          <Spacer height={20} />
          <Text onPress={LogInAccountPressed} style={{ alignSelf: "center", color: BLACK_GRAY, fontWeight: '600', fontFamily: fonts.lightItalic }}>
            Login to your account
          </Text>

        </View>
      </KeyboardAwareScrollView>

    </WrapperContainer>
  )
}

export default Signup
const styles = StyleSheet.create({
  welcomeStyle: {
    fontSize: textScale(20),
    fontWeight: '700',
  },
  jergaStyle: {
    fontSize: textScale(24),
    color: PRIMARY,
    fontWeight: '700'
  }
})