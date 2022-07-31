import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'

export default function Product({ item, navigation}) {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetailScreen')}}>
            <ImageBackground source={{ uri: item.images[0] }} style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={[styles.title, { fontWeight: '600', fontSize: 14 }]}>{item.brand}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.title, { fontSize: 16 }]}>{'$ ' + item.price}</Text>
                </View>
                <View style={styles.discountContainer}>
                    <Text style={[styles.title, { fontSize: 12 }]}>{'%' + item.discountPercentage}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>


    )
}
