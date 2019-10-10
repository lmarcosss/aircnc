import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform } from 'react-native'

import { GoStackForm, GoStackInput, GoStackButton } from '../../components'

import api from '../../services/api'

import logo from '../../../assets/logo.png'

import styles from './login.go-stack.style'

const OS_IOS = Platform.OS === 'ios'
export function LoginScreen() {
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    async function handleSubmit() {
        // email, techs
        console.log(email)
        console.log(techs)
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

