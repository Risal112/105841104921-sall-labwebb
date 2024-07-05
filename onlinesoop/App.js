import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './login';
import SignUp from './SingUp';
import forgot from  './forgot';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Home Screen</Text> 
      <Button title = "Ke Halaman Login" onPress={() => navigation.navigate('HomeScreen')}/> 
     
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/> */}
        <Stack.Screen name="SingUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={login} options={{headerShown : false}}/>
        <Stack.Screen name="forgot" component={forgot} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;