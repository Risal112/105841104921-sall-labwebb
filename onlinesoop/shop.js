import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const categories = [
  'Tops',
  'Shirts & Blouses',
  'Cardigans & Sweaters',
  'Knitwear',
  'Blazers',
  'Outerwear',
  'Pants',
  'Jeans',
  'Shorts',
  'Skirts',
  'Dresses',
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}></Text>
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.searchButton}></Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>
      <Text style={styles.chooseCategory}>Choose category</Text>
      <ScrollView>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    fontSize: 24,
  },
  viewAllButton: {
    backgroundColor: '#FF4500',
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  viewAllText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  chooseCategory: {
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16,
  },
  categoryItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryText: {
    fontSize: 16,
  },
});