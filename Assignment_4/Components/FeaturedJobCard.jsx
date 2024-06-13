import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const FeaturedJobCard = ({ imgUrl, bgColour, label, miniLabel, location, price, underLabel }) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColour}]}>
        <Image source={{uri: imgUrl}} style={styles.image}/>
        <Text style={styles.label}>{label}</Text>
        <Text>{underLabel}</Text>
        <Text>{miniLabel}</Text>
        <Text>{location}</Text>
        <Text>{price}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 280,  
      height: 186, 
      marginVertical: 10,      
      borderRadius: 24, 
      margin: 8,
      marginLeft: 10,
      borderWidth: 1,
      borderColor: '#E8D1BA',
      overflow: 'hidden',
    },
  
    label: {
      position: 'absolute',
      top: 50,
      left: 10,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    }

});

export default FeaturedJobCard;