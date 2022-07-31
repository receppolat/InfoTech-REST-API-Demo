import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

function Login({ navigation }) {
    const [users, setUsers] = useState();
    const [validate, setValidate] = useState(false);
    const [username, setUsername] = useState('atuny0');
    const [password, setPassword] = useState('9uQFF1Lh');
    const getUsers = () => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(response => {
                setUsers(response.users)
            });
    }
    const verifyUser = () => {
        /*
        Daha az performanslı hali
        for (let index = 0; index < users.length; index++) {
            if ('atuny0' == users[index].username && '9uQFF1Lh' == users[index].password) {
                setValidate(true);
                console.log(users[index]);
                break;
            }
            else {
                setValidate(false)
            }
        }
        if (validate) {
            console.log('doğru');
        }
        else {
            console.log('yanlış');
        }*/
    }
    const navigateToHome = () => {
        if (username && password) {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
                .then(res => res.json())
                .then(response => {
                    if (response.message) {
                        Alert.alert('Hatalı Giriş', 'Yanlış parola ya da kullanıcı adı');
                    }
                    else {
                        //reduxtaki kullanıcı slice'ını güncelleriz.
                        navigation.navigate('HomeScreen', { response })
                    }
                })
        }
    }
    return (
        <View>
            <TextInput
                placeholder='Kullanıcı adınız giriniz..'
                onChangeText={setUsername}
                style={styles.input}
                value={'atuny0'}
            />
            <TextInput
                placeholder='Parola giriniz..'
                onChangeText={setPassword}
                style={styles.input}
                value={'9uQFF1Lh'}
            />
            <Button title='Giriş Yap' onPress={navigateToHome} />
        </View>
    )
}

export default Login;