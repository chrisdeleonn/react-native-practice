import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function Box ({ entireStudent }) {

const { name, age } = entireStudent

    return (
        <View style={styles.box}>
            <Text>{name}</Text>
            <Text>{age}</Text>
            
        </View>
    )
}
export default Box
