import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Pullover',
    color: 'Black',
    size: 'L',
    price: 510000,
    image: require('./assets/baju1.png'), 
  },
  {
    id: 2,
    name: 'T-Shirt',
    color: 'Gray',
    size: 'L',
    price: 300000,
    image: require('./assets/baju2.jpeg'), 
  },
  {
    id: 3,
    name: 'Sport Dress',
    color: 'Black',
    size: 'M',
    price: 430000,
    image: require('./assets/baju3.jpeg'), 
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState(products.map(product => ({ ...product, quantity: 1 })));

  const handleQuantityChange = (itemId, action) => {
    setCartItems(prevItems => prevItems.map(item =>
      item.id === itemId ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={{ fontSize: 50 }}>My Bag</Text>
        <TouchableOpacity>
          <Text style={styles.searchButton}></Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {cartItems.map(item => (
          <View key={item.id} style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>
                Color: {item.color} - Size: {item.size}
              </Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'decrease')}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, 'increase')}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>RP{item.price}</Text>
              <TouchableOpacity>
                <Text style={styles.moreButton}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.promoContainer}>
          <TextInput placeholder="Enter your promo code" style={styles.promoInput} />
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>→</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total amount:</Text>
          <Text style={styles.totalAmount}>Rp{calculateTotal()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  moreButton: {
    fontSize: 16,
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  promoInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  promoButton: {
    backgroundColor: '#FF4500',
    padding: 10,
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF4500',
    padding: 12,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});