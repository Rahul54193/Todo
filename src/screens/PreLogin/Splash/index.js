import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navigator from '../../../navigations/Navigator';
import SplashView from './SplashView';
import { useDispatch, useSelector } from 'react-redux';
import SharedPreference from '../../../helper/SharedPreference';
import Walkthrough from '../Walkthrough/Walkthrough';
import { apiAction } from '../../../store/authSlice';

const Splashscreen = () => {
    const [isSplashEnd, setIsSplashEnd] = useState(false);
    // const [walkthroughDisabled, setWalkThroughDisabled] = useState(false)
    const st = useSelector(store => store?.authReducer)
    const dispatch = useDispatch()
   
    // useEffect(() => {
    //     SharedPreference.getItem(SharedPreference.keys.WALKTHROUGH_DISABLE, 'false').then(res => {
    //         let val = res == 'true' ? true : false;
    //         setWalkThroughDisabled(val);
    //         console.log(res, 'walkthrough status')
    //     })
    // }, [walkthroughDisabled])
    useEffect(() => {
        SharedPreference.setItem('name', 'Rahul').then(res => console.log(res, 'res++++'))
        setTimeout(() => {
            setIsSplashEnd(true);
        }, 3000);
        SharedPreference.getItem('name').then(res => console.log(res, 'res+++++'))
    }, []);
    useEffect(()=>{
       
    },[])
    return isSplashEnd ? <Navigator />  : <SplashView />
}

export default Splashscreen

const styles = StyleSheet.create({})