import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './form.go-stack.style'

export function GoStackForm({ children }) {
    return (
        <View style={styles.form}>
            {children}
        </View>
    )
}
