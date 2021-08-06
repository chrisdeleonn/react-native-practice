import React from 'react'
import { View, Text, Image, Button } from 'react-native'

import styles from '../styles'

const RestaurantDetails = ({ route, navigation }) => {
  const { address, id, name, photoUrl } = route.params.restaurant

  return (
    <View>
      <Image source={{ uri: photoUrl }} style={{ width: '100%', height: 200 }} />
      <Text>here are your requested details...{name}</Text>
      <Text>{address}</Text>
      <Button title='Add New Restaurant' onPress={() => navigation.navigate('AddNewRestaurant')} />
    </View>
  )
}

export default RestaurantDetails
