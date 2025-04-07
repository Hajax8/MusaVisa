import { light } from '@/assets/colours'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>I love youuu en enä virelellesi tuuu vastaajassa i love youu en enäää vierellesi tiúu vsataaajssa  i love youu en enää vierellesi tuu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: light.background
  },
})