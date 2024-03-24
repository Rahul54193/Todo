import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Referral, Profile, Myservice } from '../../screens';
import { RoutesName } from '../../helper/strings';
import CustomIcon, { ICON_TYPE } from '../../components/CustomIcon';
import { icCarMech, icCollage, icHome, icLink, icProfile } from '../../resources/imgPath';
import { ACTIVE_ICON_COLOR } from '../../resources/colors';
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: ACTIVE_ICON_COLOR,
    tabBarShowLabel: true,
    tabBarHideOnKeyboard: true,
    unmountOnBlur: true,
    tabBarItemStyle: {
        width: 80,
        // paddingHorizontal: 0,
        // padding: 0,
        height: 60,
        // backgroundColor: 'red',
    },
    tabBarLabelStyle: {
        fontSize: 12,

    },
    tabBarStyle: {
        width: 'auto',
        height: 70,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    // tabBarIcon: ({ focused, color, size }) => {
    //   let iconName;
    //   let origin;
    //   switch (route.name) {
    //     case RoutesName.EXPLORE_TAB:
    //       iconName = 'search';
    //       origin = ICON_TYPE.FEATHER_ICONS;
    //       break;
    //     case RoutesName.FRESH_FINDS_TAB:
    //       iconName = 'zap';
    //       origin = ICON_TYPE.FEATHER_ICONS;
    //       break;
    //     // case RoutesName.SELL_TAB:
    //     //   iconName = 'plus';
    //     //   origin = ICON_TYPE.OCTICONS;
    //     //   color = focused ? color : '#ffffff';
    //     //   break;
    //     // case RoutesName.CHAT_TAB:
    //     //   iconName = 'message-square';
    //     //   origin = ICON_TYPE.FEATHER_ICONS;

    //     // {
    //     //   true
    //     //     ? ((iconName = 'message-badge-outline'),
    //     //       (origin = ICON_TYPE.MATERIAL_COMMUNITY))
    //     //     : ((iconName = 'message-square'),
    //     //       (origin = ICON_TYPE.FEATHER_ICONS));

    //     // }

    //     //  break;
    //     case RoutesName.PROFILE_SECTION_SCREEN:
    //       iconName = 'user';
    //       origin = ICON_TYPE.FEATHER_ICONS;
    //       break;
    //     default:
    //       return;
    //   }
    //   // console.log('TTTTTT', route);
    //   return (
    //     <View
    //       style={{
    //         flex: 1,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <CustomIcon origin={origin} name={iconName} size={size} color={color} />
    //       {route.name !== RoutesName.SELL_TAB ? (
    //         <CustomText
    //           style={{
    //             fontSize: SPACING.SCALE_10,
    //             color: color,
    //           }}>
    //           {route.name}
    //         </CustomText>
    //       ) : null}
    //     </View>
    //   );
    // },
});
const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneAnimationEnabled={false}
            // screenOptions={this.prop}
            screenOptions={props => screenOptions(props)}
        >
            <Tab.Screen
                name={RoutesName.HOME}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size ,focused}) => (
                        <Image
                        style={{ tintColor: focused ? ACTIVE_ICON_COLOR : null }}
                            source={icHome}
                        />
                    ),
                }}
            // listeners={{
            //   tabPress: e => {
            //     if (userProfileDetails?.email === 'swi@swi.com') {
            //       e.preventDefault(); // Prevent the default navigation action

            //       // showAlert({
            //       //   title: 'Alert',
            //       //   message: 'Login to use the app.',
            //       // });
            //       showAlert({
            //         title: 'Alert',
            //         message: 'Login to use the app.',
            //         actions: [
            //           {
            //             text: 'Log in',
            //             style: 'default',
            //             onPress: () => {
            //               dispatch(logoutAction());
            //               // Code to run when the "Confirm" button is pressed
            //             },
            //           },
            //           {
            //             text: 'Cancel',
            //             style: 'cancel',
            //             onPress: () => {
            //               // Code to run when the "Cancel" button is pressed
            //             },
            //           },
            //         ],
            //       });
            //     }
            //   },
            // }}
            />
            <Tab.Screen
                name={RoutesName.MYSERVICE}
                component={Myservice}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Services',
                    tabBarIcon: ({ color, size, focused }) => (

                        <Image
                            style={{ tintColor: focused ? ACTIVE_ICON_COLOR : null }}
                            source={icCollage}
                        />
                    ),
                }}

            />
            <Tab.Screen
                name={RoutesName.REFERRAL}
                component={Referral}
                options={{
                    headerShown: false,
                    tabBarLabel: 'My Bookings',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image
                        style={{ tintColor: focused ? ACTIVE_ICON_COLOR : null }}
                            source={icCarMech}
                        />
                    ),
                }}

            />
            <Tab.Screen
                name={RoutesName.PROFILE}
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image
                        style={{ tintColor: focused ? ACTIVE_ICON_COLOR : null }}
                            source={icProfile}
                        />
                    ),
                }}

            />

        </Tab.Navigator>
    )
}

export default MainTabNavigator

const styles = StyleSheet.create({})