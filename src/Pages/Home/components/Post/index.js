import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'

export default function Post({ post, image, username }) {
    const [visible, setVisible] = useState(false)

    const showMore = () => {
        setVisible(!visible)
    }
    
    return (
        <View>
            <Modal
                transparent={true}
                visible={visible}
                onDismiss={() => { setVisible(!visible) }}
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: '-7%', marginBottom: '3%' }}>{post.title}</Text>
                        <Text style={styles.modalText}>{post.body}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                post.tags.map(tag => {
                                    return (<Text style={{ color: 'blue' }}>{'#' + tag + '  '}</Text>)
                                })
                            }
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('images/star.png')} style={{ width: 20, height: 20, marginRight: '15%' }} />
                                <Text>{post.reactions}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text>Kapat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={showMore}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{uri: image}} style={{width: 35, height:35}}/>
                    <View>
                        <Text>{username}</Text>
                        <Text style={styles.title}>{post.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
