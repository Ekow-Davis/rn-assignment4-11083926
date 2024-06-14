import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LogInPage from './Pages/LogInPage';
import {TextInput, Pressable, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';


const App = () => {

  

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

    <LogInPage />

    
  </View>

  
    
    </ScrollView>
    </View>
    </SafeAreaView>
    
    
    </>
  );
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


export default App