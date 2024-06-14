import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';

const SignInputBox = ({ placeholder }) => {
  return (
    <>
    <View>
      <TextInput 
      placeholder={placeholder}
      placeholderTextColor='#999'
      style={{backgroundColor: "white", width: 327, height: 52, borderRadius: 10, padding: 10, borderWidth: 1, margin: 12, borderColor: '#AFB0B6',}}
      />
    </View>
    </>
  )
}

const styles =StyleSheet.create({

})

export default SignInputBox