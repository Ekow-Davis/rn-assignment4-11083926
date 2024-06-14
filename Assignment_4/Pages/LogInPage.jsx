import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import SignInputBox from '../Components/SignInputBox';
import { ScrollView, SafeAreaView, View, TouchableOpacity , Pressable, Text, TextInput, StyleSheet, Image } from 'react-native';

const appleImage = require("../assets/Images/apple.png")
const googleImage = require("../assets/Images/google.png")
const facebookImage = require("../assets/Images/facebook.png")

const LogInPage = () => {

	const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
{/*Code body*/}
    <View style={{marginBottom: 10, marginTop: 30,}}>
      <View>
			<Text style={{fontSize: 20, margin: 14, fontWeight: 'bold',}} >Jobizz</Text>

				<Text style={{ fontSize: 14, }}>Welcome Back</Text>

				<Text style={{}}> Let’s log in. Apply to jobs!</Text>
			</View>

			<View>

			<SignInputBox 
    		placeholder="Name"
    	/>

			<SignInputBox 
				placeholder="Email"
			/>

			<TouchableOpacity
    		activeOpacity={1}
    		style={[styles.touchableOpacity, isPressed && styles.pressed]} 
				onPressIn={() => setIsPressed(true)} 
				onPressOut={( ) => setIsPressed(false)}
				onPress={() => console.log('TouchableOpacity')}>

      <Pressable 
				onPress={() => console.log('Pressable')}
				onPressIn={() => setIsPressed(true)} 
				onPressOut={( ) => setIsPressed(false)}
				style={[{margin: 10, marginHorizontal: 20, alignItems: 'center', borderRadius: 5, justifyContent: 'center', padding: 10,  backgroundColor: '#356899',}, isPressed && styles.pressed]}>

        <Text style={{color: "white", fontSize: 14, letterSpacing: 0.5,}}>Log In</Text>
      </Pressable>
    </TouchableOpacity>

			</View>

			<View styles={{flexDirection: 'row', alignItems: 'center', marginVertical: 10,}}>
				<View style={{flex: 1, height: 1, backgroundColor: '#ccc',}}/>
				<Text> Or Continue with</Text>
				<View style={{flex: 1, height: 1, backgroundColor: '#ccc',}}/>
			</View>
			

			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>

				<Image source={appleImage} style={{height: 30, width: 30, margin: 15, backgroundColor: 'red' }} />
				<Image source={googleImage} style={{height: 30, width: 30, margin: 15, backgroundColor: 'red' }} />
				<Image source={facebookImage} style={{height: 30, width: 30, margin: 15, backgroundColor: 'red' }} />

			</View>

    </View>
{/*Code body*/}
    </ScrollView>
    </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
  },

  pressed: {
    opacity: 0.5,
  },

});

export default LogInPage