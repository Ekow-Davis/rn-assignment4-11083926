import { StatusBar } from 'expo-status-bar';
import FeaturedJobCard from './Components/FeaturedJobCard';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const FeaturedJobBackgroundImage = require("./assets/Images/Random_Squigles-removebg-preview.png")

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

    <FeaturedJobCard 
    bgColour="#E23d"
    label="Label"
    
    miniLabel="miniLabel"
    price="price"
    location="location"
    
    />

    <View>
      <Text>Hello</Text>
    </View>

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
    backgroundColor: '#fff',
  },
});


export default App