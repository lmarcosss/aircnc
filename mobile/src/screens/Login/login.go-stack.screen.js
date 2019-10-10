import React, { useState, useEffect } from 'react'
import { Image, AsyncStorage, KeyboardAvoidingView, Platform } from 'react-native'

import { GoStackForm, GoStackInput, GoStackButton } from '../../components'

import api from '../../services/api'

import logo from '../../../assets/logo.png'

import styles from './login.go-stack.style'

const OS_IOS = Platform.OS === 'ios'

export function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('ListScreen')
            }
        })
    }, [])

    async function handleSubmit() {
        const response = await api.post('/sessions', {
            email,
        })

        const { _id } = response.data

        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('ListScreen')
    }

    return (
        <KeyboardAvoidingView enabled={OS_IOS} behavior="padding" style={styles.container}>
            <Image source={logo} />
            <GoStackForm>
                <GoStackInput
                    labelText="SEU E-MAIL *"
                    placeholder="Seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <GoStackInput
                    labelText="TECNOLOGIAS *"
                    placeholder="Tecnologias de seu interesse"
                    autoCapitalize="words"
                    value={techs}
                    onChangeText={setTechs}
                />
                <GoStackButton buttonText="Encontrar spots" onPress={handleSubmit} />
            </GoStackForm>
        </KeyboardAvoidingView>
    )
}

