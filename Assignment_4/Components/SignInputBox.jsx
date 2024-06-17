import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SignInputBox = ({ placeholder }) => {

  const [input, setInput] =useState('')

  return (
    <>
    <View>
      <TextInput 
      placeholder={placeholder}
      placeholderTextColor='#999'
      onChangeText={(val) => setInput(val)}
      style={{backgroundColor: "#ffffff", width: 350, height: 52, borderRadius: 10, padding: 1,  margin: 4, marginLeft: 20, borderColor: '#AFB0B6',}}
      />

      <Text> {input} </Text>
    </View>
    </>
  )
}

export default SignInputBox