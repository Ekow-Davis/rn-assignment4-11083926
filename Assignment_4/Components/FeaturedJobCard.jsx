import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const FeaturedJobCard = ({ imageUrl, imageAlt, bgColour, label, miniLabel, location, price, }) => {
  return (
    <>
    <View style={[styles.container, {backgroundColor: bgColour}]}>
        <Image 
        source={imageUrl} 
        alt={imageAlt} 
        style={styles.logo} />
        <Text style={styles.label}>{label}</Text>        
        <Text style={styles.miniLabel}>{miniLabel}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.price}>{price}</Text>
        
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 280,  
      height: 186, 
      marginVertical: 1,      
      borderRadius: 24, 
      margin: 15,         
      overflow: 'hidden',
    },
  
    label: {
      position: 'absolute',
      top: 20,
      left: 50,
      marginLeft: 10,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    },

    price: {
      position: 'absolute',
      left: 20,
      bottom: 30,
    },

    location: {
      position: 'absolute',
      right: 30,
      bottom: 30,
    },

    miniLabel: {
      position: 'relative',
      left: 50,
      top: 3,
      marginLeft: 10,
    },

    logo: {
      position: 'relative',
      top: 20,
      left: 20,
      width: 35,
      height: 35,
      resizeMode: 'cover',
    }

    /*
    backgroundImage: {        
    ...StyleSheet.absoluteFillObject, 
    resizeMode: 'cover', 
    opacity: 0.5, 
    },
    */
});

export default FeaturedJobCard;