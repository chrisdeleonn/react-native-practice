import React from 'react'
import { View, Text } from 'react-native'
import { Card, Button, Icon, Rating, AirbnbRating } from 'react-native-elements'

import styles from '../styles'

function Box({ item }) {
  const { name, photoUrl, rating, address } = item
  console.log('this is props', address) //console log to identify data and check for errors as you go

  return (
    <Card containerStyle={{ width: 400 }}>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: photoUrl }}>
        <Text style={{ marginBottom: 10 }}>{address}</Text>
        <Button
          // icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='View'
        />
      </Card.Image>
    </Card>
  )
}
export default Box
