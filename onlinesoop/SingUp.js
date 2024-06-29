import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}

const TextInputCustom = ({ placeholder, typekeyboard }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={typekeyboard}
      style={{
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 18,
      }}
    />
  )
}

const TextInputCostum = ({ placeholder, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={{
        width: 320,
        height: 60,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 5,
        paddingLeft: 20,
        backgroundColor: 'white',
        fontSize: 15,
        fontFamily: 'MetroMedium',
      }}
    />
  )
}

const ButtonCostum = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20,
    }}>
      <Text style={{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'MetroMedium',
      }}>{text}</Text>
    </View>
  )
}

const App = () => {
  const [fontsLoaded] = useFonts({

  });

  if (!fontsLoaded) {
    return <Text>Font tidak ditemukan...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.form}>
          <TextInputCostum placeholder="Name" keyboardType="default" />
          <TextInputCostum placeholder="Email" keyboardType="email-address" />
          <TextInputCostum placeholder="Password" keyboardType="default" />
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ fontSize: 15, textAlign: 'flex-end', marginLeft: 130, fontFamily: 'MetroMedium' }}>Already have an account?</Text>
          </View>
          <ButtonCostum text="SIGN UP" color="#C40C0C" />
        </View>
      </View>
      <Text style={{ fontSize: 15, textAlign: 'center', fontFamily: 'MetroMedium' }}>Or login with social account</Text>
      <View style ={styles.logoRow}>
        <View style ={styles.logoContainer}>
        <Image source={require('./assets/logo-google.png')} style={styles.logo} />
        </View>
        <View style ={styles.logoContainer}>
        <Image source={require('./assets/logo-facebook.webp')} style={styles.logo} />
        </View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    marginBottom: 40,
    fontFamily: 'MetroBold'
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  logoContainer: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: 'white',
    marginHorizontal: 10
  },
  logo: {
    width: 30,
    height: 30
  },
});