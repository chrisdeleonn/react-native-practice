import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

import styles from '../styles'

const AddNewScreen = () => {
  const [restaurantName, setRestaurantName] = useState('')
  const [address, setAddress] = useState('')
  const [rating, setRating] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  const newRestaurant = {
    address: address,
    name: restaurantName,
    photoUrl: photoUrl,
    rating: rating,
  }

  const handleNewRestaurant = () => {
    fetch('https://bocacode-intranet-api.web.app/restaurants', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })
      .then()
      .then(() => console.log('new restaurant added'))
      .catch((err) => console.error(err))
  }

  return (
    <View>
      <Text h3>this is for the new screen</Text>
      <Input placeholder='Restaurant Name' onChangeText={(text) => setRestaurantName(text)} />

      <Input placeholder='Address Here' onChangeText={(text) => setAddress(text)} />

      <Input placeholder='Photo Url' onChangeText={(text) => setPhotoUrl(text)} />

      <Input placeholder='Rating' onChangeText={(text) => setRating(text)} />

      <Ionicons name='md-checkmark-circle' size={32} color='green' />
      <Button title='Send New Restaurant' onPress={handleNewRestaurant} />
      <Text style={{ color: 'white', textAlign: 'center' }}>add new restaurant </Text>
    </View>
  )
}

export default AddNewScreen
