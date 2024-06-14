import React from 'react'
import SignInputBox from '../Components/SignInputBox';
import { TouchableOpacity , PressableView, Text, TextInput, StyleSheet, Image } from 'react-native';



const Homepage = () => {

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

			<Text> Or Continue with</Text>

			<View>

				<Image source={appleImage} />
				<Image source={googleImage} />
				<Image source={facebookImage} />

			</View>

    </View>
{/*Code body*/}
    </ScrollView>
    </View>
    </SafeAreaView>
    </>
  )
}

export default Homepage