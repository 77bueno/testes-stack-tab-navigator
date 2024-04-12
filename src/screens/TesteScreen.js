import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TesteScreen() {
  return (
    <View style={styles.seila}>
      <Text>Teste de Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    seila: {
        backgroundColor: "#FF0000"
    }
})