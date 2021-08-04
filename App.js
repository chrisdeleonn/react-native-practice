import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

import styles from './styles'
import Box from './components/Box'

const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77eUfV8Tei6c-C_IWp6dRsul0tc3pjfBzMA&usqp=CAU'}//url goes here


const App = () => {
  const students = [
  {name: 'Chris', age: 20},
  {name: 'Emily', age: 20},
  {name: 'Christian', age: 20},
  {name: 'Val', age: 20},
  {name: 'Matt', age: 20},
  {name: 'Zack', age: 20},
  {name: 'Luis', age: 20},
  {name: 'Sarah', age: 20},
  {name: 'Myra', age: 20},
]

  return (
    <ScrollView>
      <SafeAreaView>
      <Text style={styles.customText}>hello chris de leon</Text>
      <StatusBar style="auto" />
      <ImageBackground 
        source={image} 
        resizeMode='cover' 
        style={{ ...styles.container, flex: 1, }}>

        {students.map(student => {
          return <Box entireStudent={student} />
        })}
      </ImageBackground>
    </SafeAreaView>
     </ScrollView>
      );
  }
export default App
