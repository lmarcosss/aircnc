import React from 'react'
import { TouchableOpacity } from 'react-native'

import styles from './button.go-stack.style'

export function GOStackButton({ text }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
