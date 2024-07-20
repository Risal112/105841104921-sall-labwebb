import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <View style={styles.icons}>
          <Text style={styles.icon}></Text>
          <Text style={styles.icon}></Text>
          <Text style={styles.icon}></Text>
        </View>
      </View>

    
      <View style={styles.searchIcon}>
        <Text style={styles.icon}></Text>
      </View>

    
      <View style={styles.content}>
        <Text style={styles.title}>My profile</Text>

        
        <View style={styles.profileInfo}>
        <Image source={require('./assets/propil.jpeg')}  style={styles.profileImage} />
          
          <View>
            <Text style={styles.name}>Risal</Text>
            <Text style={styles.email}>108541104921@email.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My orders</Text>
          <Text style={styles.menuSubtext}>Already have 12 orders</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Shipping addresses</Text>
          <Text style={styles.menuSubtext}>3 addresses</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Payment methods</Text>
          <Text style={styles.menuSubtext}>Visa ** ** 34</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Promocodes</Text>
          <Text style={styles.menuSubtext}>You have special promocodes</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>My reviews</Text>
          <Text style={styles.menuSubtext}>Reviews for 4 items</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
          <Text style={styles.menuSubtext}>Notifications, password</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#F2F2F2',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 18,
    marginLeft: 10,
  },
  searchIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
  },
  menuSubtext: {
    fontSize: 14,
    color: 'gray',
  },
  arrow: {
    fontSize: 16,
    textAlign: 'right',
  },
});

export default ProfileScreen;