import React from 'react'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import FeaturedJobCards from '../Components/FeaturedJobCard'
import PopularJobCard from '../Components/PopularJobCard'
import { ScrollView, FlatList, SafeAreaView, View, Pressable, Text, TextInput, StyleSheet, Image } from 'react-native';


const Profile = require("../assets/Images/Profile.png")

const horizontalData = [
	{ key: '1', imageUrl: require("../assets/Images/google.png"), imageAlt: "googleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", bgColour: "white", textColour: "black", },
	{ key: '2', imageUrl: require("../assets/Images/apple.png"), imageAlt: "appleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple", bgColour: "black", textColour: "white", },
	{ key: '3', imageUrl: require("../assets/Images/facebook.png"), imageAlt: "facebookImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", bgColour: "blue", textColour: "white", },
	{ key: '4', imageUrl: require("../assets/Images/burgerKing.png"), imageAlt: "burgerKing", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Burger King", bgColour: "yellow", textColour: "black", },
	{ key: '5', imageUrl: require("../assets/Images/beats.png"), imageAlt: "beatsImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Beats", bgColour: "red", textColour: "white", },
	{ key: '6', imageUrl: require("../assets/Images/apple.png"), imageAlt: "appleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple", bgColour: "black", textColour: "white", },
	{ key: '7', imageUrl: require("../assets/Images/google.png"), imageAlt: "googleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", bgColour: "white", textColour: "black", },
	{ key: '8', imageUrl: require("../assets/Images/facebook.png"), imageAlt: "facebookImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", bgColour: "blue", textColour: "white", },
  ];

  const verticalData = [
	{ key: '1', imageUrl: require("../assets/Images/google.png"),  location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", },
	{ key: '2', imageUrl: require("../assets/Images/apple.png"), location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple",  },
	{ key: '3', imageUrl: require("../assets/Images/facebook.png"), location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", },
	{ key: '4', imageUrl: require("../assets/Images/burgerKing.png"), location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Burger King", },
	{ key: '5', imageUrl: require("../assets/Images/beats.png"), location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Beats", },
	{ key: '6', imageUrl: require("../assets/Images/apple.png"), location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple", },
	{ key: '7', imageUrl: require("../assets/Images/google.png"),  location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", },
	{ key: '8', imageUrl: require("../assets/Images/facebook.png"), location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", },
  ];



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
<Text> Name </Text>
<Text> Email </Text>

<Image source={Profile} style={{height: 50, width: 50, margin: 10,}} />
</View>

<View>

	<TextInput>
		
	</TextInput> 

</View>
	   
	
    </View>

	<Text style={{margin: 20, fontWeight: 'bold', fontSize: 20,}}>
		Featured Jobs
	</Text>

	<FlatList
          horizontal
          data={horizontalData}
          renderItem={({ item }) => (
            <FeaturedJobCards
			bgColour={item.bgColour}
			textColour={item.textColour}
			location={item.location}
			price={item.price}
			imageAlt={item.imageAlt}
            imageUrl={item.imageUrl}
            label={item.label}
            miniLabel={item.miniLabel}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{alignItems: 'center', paddingLeft: 20, marginBottom: 20,}}
          showsHorizontalScrollIndicator={false}
        />

		  <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20,}}>
			Popular Jobs
		  </Text>

	<FlatList
          vertical
          data={verticalData}
          renderItem={({ item }) => (
            <PopularJobCard
			location={item.location}
			price={item.price}
            imageUrl={item.imageUrl}
            label={item.label}
            miniLabel={item.miniLabel}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{alignItems: 'center', paddingLeft: 20,}}
        />

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
	  backgroundColor: '#FAFAFE',
	},
  
	pressed: {
	  opacity: 0.5,
	},
  
  });

export default Homepage