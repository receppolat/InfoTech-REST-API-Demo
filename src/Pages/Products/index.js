import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Product from './components/Product'

export default function Products({navigation, route}) {
  const [products, setProducts] = useState();
  const getInit = () => {
    console.log(route.params.item);
    if (route.params.item != 'All') {
      //Türkçesi kategorilerden mi geliyor? cevap evet
      fetch('https://dummyjson.com/products/category/' + route.params.item)
        .then(res => res.json())
        .then(response => {
          setProducts(response.products)
        });
    }
    else {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(response => {
          setProducts(response.products)
        });
    }
  }
  useEffect(() => {
    getInit();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <Product item={item} navigation ={navigation} />
    )
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
