import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../../components/WrapperContainer'
import { moderateScale } from '../../../helper/responsiveSize'
import Spacer from '../../../components/Spacer'
import fonts from '../../../resources/fonts'
import { BLACK, BLACK_GRAY, WHITE } from '../../../resources/colors'
import { useDispatch, useSelector } from 'react-redux'
import SharedPreference from '../../../helper/SharedPreference'
import { resetSliceState } from '../../../store/authSlice'
import CustomInput from '../../../components/CustomInput'
import ButtonComp from '../../../components/ButtonComp'
import { showError, showSucess } from '../../../helper/helperFunctions'
import { Databases, Query, database } from 'appwrite'
import { account, databases } from '../../../appwrite/AppwriteConfig'
import { AppConst } from '../../../helper/config'

const Dashboard = () => {
  const [todo, setTodo] = useState(null)
  const [todoList, setTodoList] = useState([])
  const [logoutLoader, setLogoutLoader] = useState(false)
  const [email,setEmail]= useState('')
  const [toAddLoader,setTodoLoader]= useState(false)
  const dispatch = useDispatch();
  const userDetails = useSelector(store => store?.authReducer?.userDetails)
  console.log(userDetails)
  const onLogOut = () => {
    setLogoutLoader(true)
    SharedPreference.clearAllData()
    dispatch(resetSliceState())
    setLogoutLoader(false)
  }
  const onChangeText = (val) => {
    setTodo(val)

  }
  const onAddTodo = async () => {
    setTodoLoader(true)
    if (todo) {
      const res = await databases.createDocument(AppConst.APP_WRITE_DB_ID, AppConst.APP_WRITE_COLLECTION_ID, `unique()`, {
        email: userDetails?.providerUid,
        todo: todo,
      })
      setTodo(null)
      console.log(res, 'res++++')
      setTodoLoader(false)
      showSucess('Todo added !')
    } else {
      setTodoLoader(false)
      showError('Please enter todo!')
    }
  }
  const listToDo = async () => {
    try {
      const res = await databases.listDocuments(AppConst.APP_WRITE_DB_ID, AppConst.APP_WRITE_COLLECTION_ID, [
        Query.equal('email',userDetails?.providerUid)
      ]);
      console.log(res.documents, 'list +++')
    } catch (error) {

      console.log(error, 'err++++')
      showError(String(error))
    }
  }
  const currentUser = async()=>{
    try {
      const res = await account.get('current');
      console.log(res,'current+++')
      setEmail(res?.email)
    } catch (error) {
      
    }
  }
  const deleteToDo = async (id) => {
    try {
      const res = await databases.deleteDocument(AppConst.APP_WRITE_DB_ID, AppConst.APP_WRITE_COLLECTION_ID, '65ff4aea99a722ef3e5e')
      console.log(res, 'delete itm ')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // deleteToDo()
    currentUser()
    if(email!=''){
      listToDo()
    }
    
  }, [email])
  return (
    <WrapperContainer>
      <View style={{ flex: 1, padding: moderateScale(20) }}>

        <Spacer height={10} />
        <Text style={{ fontWeight: '900', fontSize: 28, fontFamily: fonts.extraBold, color: BLACK }}>Welcome</Text>
        <Spacer height={10} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontWeight: '600', fontSize: 20, color: BLACK_GRAY }}>{userDetails?.providerUid}</Text>
          <ButtonComp
            loading={logoutLoader}
            onPress={onLogOut}
            style={{ width: 100, backgroundColor: 'red' }}
            text={'Logout'}
          />
        </View>
        <Spacer height={10} />
        <CustomInput
          placeholder="Enter todo"
          keyboardType="default"
          returnKeyType="next"
          placeholderTextColor={'grey'}
          onChangeText={onChangeText}
          value={todo}

        />
        <Spacer height={10} />
        <ButtonComp
        loading={toAddLoader}
          style={{ width: 150 }}
          text={'Add todo'}
          onPress={onAddTodo}
        />

      </View>
      <Spacer height={10} />
      <FlatList
        data={todoList}
        ListEmptyComponent={<Text style={{alignSelf:"center"}}>
          No todo's
        </Text>}
      />
    </WrapperContainer>
  )
}

export default Dashboard

const styles = StyleSheet.create({})