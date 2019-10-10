import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, AsyncStorage, Image } from 'react-native'

import { GoStackSpotList } from '../../components'

import logo from '../../../assets/logo.png'

import styles from './list.go-stack.style'

export function ListScreen() {
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    }, [])


    function renderTechs() {
        return techs.map((tech, key) => {
            return (
                <GoStackSpotList key={key} tech={tech} />
            )
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />
            {renderTechs()}
        </SafeAreaView>
    )
}
