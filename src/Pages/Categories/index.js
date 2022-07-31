import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './components/Category'

export default function Categories({navigation}) {

  const [categories, setCategories] = useState();

  const getInit = () => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      });
  }
  useEffect(() => {
    getInit()
  }, [])
  const renderItem = ({item}) => {
    return(
      <Category item={item} navigation={navigation}/>
    )
  }
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
