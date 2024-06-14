import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import SignInputBox from './Components/SignInputBox';
import FeaturedJobCard from './Components/FeaturedJobCard';
import {Pressable, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const appleImage = require("./assets/Images/apple.png")





const App = () => {

  const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
{/*Code body*/}
  <View style={{marginBottom: 20, marginTop: 60,}}>
    
    <View>
      <Text>Hi</Text>
    </View>

    <FeaturedJobCard 
    bgColour="#e5d2"
    label="Label"
    imageUrl={appleImage}
    miniLabel="miniLabel"
    price="price"
    location="location"
    />

    <SignInputBox 
    placeholder="Name"
    />

    <View>
      <Text>Hello</Text>
    </View>

  </View>

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
      style={[{margin: 10, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', padding: 10,  backgroundColor: '#356899',}, isPressed && styles.pressed]}>
        
        <Text style={{color: "white", fontSize: 14, letterSpacing: 0.5,}}>Log In</Text>
      </Pressable>
    </TouchableOpacity>
      
    
    </ScrollView>
    </View>
    </SafeAreaView>
    
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  pressed: {
    opacity: 0.5,
  },

});


export default App