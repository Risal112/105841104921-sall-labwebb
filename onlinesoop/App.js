import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const App = () => {
  const [fontloaded] = useFonts({
    MetropolisBlack : require ('./.expo/assets/fonts/Metropolis-Black.otf'),
    MetropolisBold : require ('./.expo/assets/fonts/Metropolis-Bold.otf'),
    MetropolisLight: require ('./.expo/assets/fonts/Metropolis-Light.otf'),
    MetropolisSemiBold : require ('./.expo/assets/fonts/Metropolis-SemiBold.otf')
  })
  if (!fontloaded){
    return<Text>tidak ditemukan</Text>
  }
    return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
      <Text style={{
      fontsFamily:"MetroBlack",
      fontSize:35
    }}>font Lebar dan Tebal</Text>
    <Text style={{
      fontsFamily:"MetroBold",
      fontSize:30
    }}>Font Tebal</Text>
    <Text style={{
      fontsFamily:"MetroLight",
      fontSize:20
    }}>Font kecil</Text>
    <Text style={{
      fontsFamily:"MetroSemiBold",
      fontSize:25
    }}>Font Besar dan Tebal</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})