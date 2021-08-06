import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/HomeScreen'
import RestaurantDetails from './screens/RestaurantDetailScreen'
import AddNewScreen from './screens/AddNewScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Welcome' }} />

        <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} options={{ title: 'Restaurant Details' }} />

        <Stack.Screen name='AddNewRestaurant' component={AddNewScreen} options={{ title: 'Add New Restaurant' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
