import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const PopularJobCard = ({ imageUrl, label, pay, miniLabel, location}) => {
  return (
    <>
    <View style={styles.container}>
        <Image source={imageUrl} style={{height: 50, width: 50, margin: 4,}} />
        <Text style={{position: 'absolute', left: 70, top: 15, fontWeight: 'bold',}}>{label}</Text>
        <Text style={{position: 'absolute', left: 70, top: 40, opacity: 0.6,}}>{miniLabel}</Text>
        <Text style={{position: 'absolute', top:15, right: 10, fontWeight: 'bold', }}>{pay}</Text>
        <Text style={{position: 'absolute', top:40, right: 10, opacity: 0.6, }}>{location}</Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    margin: 6,
    width: 327,
    height: 74,
    padding: 8,
  }
  });

export default PopularJobCard