import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import styles from './input.go-stack.style'

export function GoStackInput({
    labelText,
    placeholder,
    placeholderTextColor = "#999",
    autoCapitalize = "none",
    autoCorrect = false,
    value,
    onChangeText,
}) {
    return (
        <View>
            <Text style={styles.label}>{labelText}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={styles.input}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                value={value}
                onChangeText={(value => onChangeText(value))}
            />
        </View>
    )
}
