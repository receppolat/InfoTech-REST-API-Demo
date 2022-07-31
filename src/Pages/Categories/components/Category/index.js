import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
export default function Category({ item, navigation}) {
  return (
    <TouchableOpacity style={ styles.container} onPress={()=>{navigation.navigate('ProductsScreen', {item})}}>
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  )
}
