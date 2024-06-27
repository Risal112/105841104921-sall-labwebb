import { StyleSheet,Text,View,TextInput  } from 'react-native';
import React from 'react';

  const ButtonCustom=({text,color})=>{
return(
  <View style={{
    backgroundColor:color,
    width:250,
    height:100,
    borderRadius:10,
    justifyContent:'center',
    marginBottom:10,
  }}>
  <Text style={{
    textAlign:'center',
    color:'white',
    fontSize:30,
    fontWeight:'bold',

  }}>
  {text}
  </Text>
</View>
)
  }
 const App=()=>{
return(
  <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  }}>
 <ButtonCustom text="Login" color="red"/>
 <ButtonCustom text="Register" color="blue"/>
 <ButtonCustom text="Register" color="green"/>
 </View>
)
 }
   

export default App;
