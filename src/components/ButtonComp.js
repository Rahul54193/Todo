import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, PaperProvider } from 'react-native-paper'
import { PRIMARY } from '../resources/colors'

const ButtonComp = ({ onPress, text, style, buttonColor, textColor, loading = false, disabled = false }) => {
    return (

        <Button loading={loading} disabled={disabled} onPress={onPress} mode="contained" buttonColor={buttonColor ? buttonColor : PRIMARY} style={{ ...style }} >
            <Text style={{ color: textColor ? textColor : 'white' }} >{text}</Text>
        </Button>

    )
}

export default ButtonComp

const styles = StyleSheet.create({})