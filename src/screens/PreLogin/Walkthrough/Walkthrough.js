import { Animated, FlatList, Image, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import imgPath, { icWalkFirst } from '../../../resources/imgPath'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../helper/responsiveSize'
import { PRIMARY, PRIMARY_LITE, WHITE } from '../../../resources/colors'
import { Button, PaperProvider, Text } from 'react-native-paper'
import Spacer from '../../../components/Spacer'
import ButtonComp from '../../../components/ButtonComp'
import Slides from './Slides'
import SharedPreference from '../../../helper/SharedPreference'

const Walkthrough = ({ setWalkThroughDisabled }) => {

    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = useState(0)
    const flatListRef = useRef(null);
    const viewAbleItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < Slides.length - 1) {
                flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
                setCurrentIndex(currentIndex + 1);
            } else {
                flatListRef.current?.scrollToIndex({ index: 0, animated: true });
                setCurrentIndex(0);
            }
        }, 2000); 
        return () => clearInterval(interval);
    }, [currentIndex]);
    const renderItem = ({ item, index }) => {
        return (
            <View style={{}}>
                <View style={{ flex: 6.5 }}>
                    <Image style={styles.imgStyle} source={item?.image} />
                </View>
                <View style={{ flex: 3.5, backgroundColor: WHITE, borderTopLeftRadius: moderateScale(12), borderTopRightRadius: moderateScale(12), justifyContent: 'center', alignItems: 'center' }}>
                    <Spacer height={moderateScaleVertical(10)} />
                    <Text style={{ color: PRIMARY, fontWeight: '700', fontSize: textScale(28), textAlign: 'center' }}>{item?.title}</Text>
                    <Spacer height={moderateScaleVertical(10)} />
                    <Text style={{ textAlign: 'center' }} >{item?.description}</Text>
                    <Spacer height={moderateScaleVertical(10)} />
                    {/* <Spacer height={moderateScaleVertical(40)} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 8, width: 50, backgroundColor: PRIMARY, borderRadius: 8, marginRight: 8 }} />
                        <View style={{ height: 8, width: 50, backgroundColor: PRIMARY_LITE, borderRadius: 8, marginRight: 8 }} />
                        <View style={{ height: 8, width: 50, backgroundColor: PRIMARY_LITE, borderRadius: 8 }} />
                    </View>
                    <Spacer height={moderateScaleVertical(40)} />
                    <ButtonComp textColor={'white'} text={'Get started'} style={{ width: width * .9, borderRadius: 10 }} /> */}

                </View>
            </View>
        )
    }
    const Paginator = ({ data }) => {
        return (
            <View style={{ flexDirection: 'row', height: 64, justifyContent: 'center', marginTop: 20 }}>
                {
                    data?.map((_, i) => {
                        return <View key={_.id} style={{ height: 6, width: 35, borderRadius: 5, marginHorizontal: 4, backgroundColor: i === currentIndex ? PRIMARY : PRIMARY_LITE }} />
                    })
                }
            </View>
        )
    }
    const getStartedPreesed = useCallback(() => {
        setWalkThroughDisabled(true)
        SharedPreference.setItem(SharedPreference.keys.WALKTHROUGH_DISABLE, 'true').then(res => console.log(res, 'res+++'))
    }, [])
    console.log(currentIndex, 'sdfdslkfdj')
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                ref={flatListRef}
                data={Slides}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
                onViewableItemsChanged={viewAbleItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                initialScrollIndex={currentIndex}
            />

            <Paginator data={Slides} />
            <View style={{ alignSelf: 'center' }}>
                <ButtonComp
                    text={'Get started'}
                    style={{ borderRadius: 8, width: width * .9, }}
                    onPress={getStartedPreesed}
                    
                />

            </View>
            <Spacer height={10} />
        </View>
    )
}

export default Walkthrough

const styles = StyleSheet.create({
    imgStyle: {
        height: height / 2,
        width: width,
        resizeMode: "cover"
    }
})