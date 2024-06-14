import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const FeaturedJobCard = ({ imageUrl, bgColour, label, miniLabel, location, price, underLabel }) => {
  return (
    <>
    <View style={[styles.container, {backgroundColor: bgColour}]}>
        
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
      margin: 8,
      marginLeft: 10,
      borderWidth: 1,
      borderColor: '#E8D1BA',
      overflow: 'hidden',
    },
  
    label: {
      position: 'relative',
      top: 50,
      left: 10,
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
      bottom: 20,
    },

    location: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },

    miniLabel: {
      position: 'relative',
      right: 1,
      bottom: 30,
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