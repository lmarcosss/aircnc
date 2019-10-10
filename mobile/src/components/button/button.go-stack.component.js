import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './button.go-stack.style'

export function GoStackButton({ buttonText, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
