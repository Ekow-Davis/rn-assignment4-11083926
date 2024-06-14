import React from 'react'
import SignInputBox from '../Components/SignInputBox';
import {  PressableView, Text, TextInput, StyleSheet, Image } from 'react-native';

const LogInPage = () => {
  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
{/*Code body*/}
    <View style={{marginBottom: 20, marginTop: 60,}}>
      <View>
				<Text>Jobizz</Text>

				<Text>Welcome Back</Text>

				<Text> Let’s log in. Apply to jobs!</Text>
			</View>

			<View>

			<SignInputBox 
    		placeholder="Name"
    	/>

			<SignInputBox 
				placeholder="Email"
			/>

			</View>

			<Text> Or Continue with</Text>

			<View>

			</View>
    </View>
{/*Code body*/}
    </ScrollView>
    </View>
    </SafeAreaView>
    </>
  )
}

export default LogInPage