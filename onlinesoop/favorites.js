import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,} from 'react-native';

const products = [
  {
    id: 1,
    image: require('./assets/baju2.jpeg'),
    name: 'LIVE Shirt',
    color: 'Blue',
    price: 320000,
    rating: 4,
  },
  {
    id: 2,
    image: require('./assets/baju3.jpeg'), 
    name: 'Mango Longsleeve',
    color: 'Orange',
    price: 480000,
    rating: 5,
    new: true,
  },
  {
    id: 3,
    image: require('./assets/baju2.jpeg'), 
    name: 'Over Shirt',
    color: 'Gray',
    price: 520000,
    rating: 3,
    size: 'L',
    soldOut: true,
  },
  {
    id: 4,
    image: require('./assets/baju1.png'), 
    name: 'T-Shirt',
    color: 'White',
    price: 280000,
    rating: 4,
    discount: 30,
  },
];

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterPress = (filter) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedFilters.length === 0) {
      return true;
    } else {
      return selectedFilters.some((filter) => {
        if (filter === 'Summer') {
          return product.color === 'Blue' || product.color === 'Orange';
        } else if (filter === 'T-Shirts') {
          return product.name.includes('Shirt');
        }
      });
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilters.includes('Summer') && styles.filterButtonActive,
          ]}
          onPress={() => handleFilterPress('Summer')}
        >
          <Text
            style={[
              styles.filterText,
              selectedFilters.includes('Summer') && styles.filterTextActive,
            ]}
          >
            Summer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedFilters.includes('T-Shirts') && styles.filterButtonActive,
          ]}
          onPress={() => handleFilterPress('T-Shirts')}
        >
          <Text
            style={[
              styles.filterText,
              selectedFilters.includes('T-Shirts') && styles.filterTextActive,
            ]}
          >
            T-Shirts
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredProducts.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDetails}>
                Color: {product.color}
                {product.size && ` - Size: RP{product.size}`}
              </Text>
              <View style={styles.productPriceContainer}>
                <Text style={styles.productPrice}>Rp{product.price}</Text>
                {product.discount && (
                  <Text style={styles.productDiscount}>-{product.discount}%</Text>
                )}
              </View>
              <View style={styles.productRating}>
                {[...Array(product.rating)].map((_, index) => (
                  <Text key={index} style={styles.star}>
                    ★
                  </Text>
                ))}
              </View>
              {product.soldOut && (
                <Text style={styles.soldOutText}>Sorry, this item is currently sold out</Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  time: {
    fontSize: 16,
    color: '#999',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  filterButtonActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
  filterTextActive: {
    color: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 14,
    color: '#666',
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  productDiscount: {
    fontSize: 14,
    color: 'red',
  },
  productRating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    fontSize: 16,
    color: '#f8b400',
  },
  soldOutText: {
    color: 'red',
    marginTop: 10,
  },
  newText: {
    backgroundColor: 'green',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default App;