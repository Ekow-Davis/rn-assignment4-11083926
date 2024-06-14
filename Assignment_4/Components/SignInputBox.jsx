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
      style={{backgroundColor: "white", width: 350, height: 52, borderRadius: 10, padding: 10, borderWidth: 1, margin: 4, marginLeft: 20, borderColor: '#AFB0B6',}}
      />

      <Text> {input} </Text>
    </View>
    </>
  )
}

const styles =StyleSheet.create({

})

export default SignInputBox