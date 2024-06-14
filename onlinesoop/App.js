import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const App = () => {
  return (


// Tugas 1
//
// {/* <View style={{
//   flax:1,
//   flexDirection:'row',
// }}>


//   <View style={{
//   flex:1,
//   backgroundColor:'purple',
// }}>
//  </View>
//   <View style={{
//     flex:1,
//     backgroundColor:'orange'
//   }}>

//   </View>
//   <View style={{
//     flex:1,
//     backgroundColor:'red', 
//   }}>

//   </View>
//   <View style={{
//     flax:1,
//     backgroundColor:'blue',
//   }}></View>
//   </View>



//Tugas 2
<View style ={{
  marginTop : 400 
}}>
  <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-center',
    marginLeft: 70
  }}>
    <View style={{
      width:100,
      height:50,
      backgroundColor:'red',
      borderRadius : 10,
      justifyContent : 'center'
    }}>
      <Text style ={{
        fontSize : 20,
        color : 'white',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>LOGIN</Text>
    </View>
    </View>
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight: 70
    }}>
    <View style={{
        width:100,
        height:50,
        backgroundColor:'blue',
        borderRadius : 10,
        justifyContent : 'center'
    }}>
      <Text style ={{
        fontSize : 20,
        color : 'white',
        textAlign: 'center',
        fontWeight: 'bold'
      }}>SingUp</Text>
      </View>
    </View>
    </View>
  )    
}

export default App

    