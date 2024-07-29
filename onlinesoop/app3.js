import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './SingUp';
import shopPage from './shop';
import BagPage from './bag';
import favoritespage from './favorites';
import profilpage from './profil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import profilAktif from './assets/profil-activated.png';
import profilInaktif from './assets/profil-inactive.png';
import favoritesAktif from './assets/favorites-activated.png';
import favoritesInaktif from './assets/favorites-inactive.png';
import bagAktif from './assets/bag-activated.png';
import bagInaktif from './assets/bag-inactive.png';
import HomeAktif from './assets/home-activated.png';
import HomeInaktif from './assets/home-inactive.png';
import ShopAktif from './assets/shop-activated.png';
import ShopInaktif from './assets/shop-inactive.png';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={shopPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="bag"
        component={BagPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ?  bagAktif : bagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={favoritespage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? favoritesAktif : favoritesInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profil"
        component={profilpage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ?  profilAktif: profilInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="shop" component={shopPage} />
        <Stack.Screen name="Bag" component={BagPage} />
        <Stack.Screen name="favorites" component={favoritespage} />
        <Stack.Screen name="profil" component={profilpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;