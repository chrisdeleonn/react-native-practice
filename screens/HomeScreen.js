import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native'
import { Button } from 'react-native-elements'

import styles from '../styles'
import Box from '../components/Box'

const image = {
  uri: 'https://assets.new.siemens.com/siemens/assets/api/uuid:1da92b2f-73eb-4534-9d1b-f9f6114f8ae8/width:1125/quality:high/deerfield-beach-monument-sign.jpg', // restaurants is the GETTER and subRestaurants is the SETTER, they are connected by useState
}

const Home = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    //useEffect is rendering the data from the restaurants API
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then((response) => response.json()) // w/e response we get and put the data structure in JSON format
      .then((allRestaurants) => setRestaurants(allRestaurants)) // allRestaurants comes back and puts into allRestaurants variable // then allRestaurants is being SET by setRestaurants INTO the SETTER which is restaurants from useState
      .catch((err) => console.log(err))
  }, []) //blank array is the dependency, is telling is to render everytime the page is loaded bc it is blank

  // const routeToRestaurant = () => {
  //   navigation.navigate('RestaurantDetails', restaurant: singleRestaurant)
  // }
  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          <Text style={styles.customText}>hello chris de leon</Text>
          <StatusBar style='auto' />
          <ImageBackground source={image} resizeMode='cover' style={{ ...styles.container, flex: 1 }}>
            {restaurants.map((singleRestaurant, index) => {
              return (
                <>
                  <Box key={singleRestaurant.id} item={singleRestaurant} />
                  <Button
                    title='Details'
                    color='#841584'
                    onPress={() => {
                      navigation.navigate('RestaurantDetails', { restaurant: singleRestaurant })
                    }}
                  />
                </>
              )
            })}
          </ImageBackground>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default Home
