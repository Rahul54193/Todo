import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import { SPLASHBG, WHITE } from '../../../resources/colors'
import { icSplashLogo } from '../../../resources/imgPath'
import { textScale } from '../../../helper/responsiveSize'
import { account } from '../../../appwrite/AppwriteConfig'
import SharedPreference from '../../../helper/SharedPreference'
import { useDispatch } from 'react-redux'
import { storeUserDetail } from '../../../store/authSlice/auth.slice'

const SplashView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    SharedPreference.getItem(SharedPreference.keys.USER_DATA).then((res)=>{
      if(res){
        dispatch(storeUserDetail(JSON.parse(res)))
      }
      console.log(res,'data from user++++')
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: textScale(30), opacity: 0.5, textAlign: 'center', color: WHITE, }}>{`To Do`}</Text>
      <Text style={{ fontSize: textScale(25), opacity: 0.5, textAlign: 'center', color: WHITE, }}>{`App write`}</Text>
    </SafeAreaView>
  )
}

export default SplashView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SPLASHBG
  }
})