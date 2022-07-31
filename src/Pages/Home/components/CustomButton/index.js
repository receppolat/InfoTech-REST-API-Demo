import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style';

function CustomButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;
