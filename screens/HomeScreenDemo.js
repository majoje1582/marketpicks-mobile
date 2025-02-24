import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Updated dummy product data
const dummyProducts = [
  { id: '1', title: 'Apple', price: '₦500', image: require('../assets/a1.jpeg') },
  { id: '2', title: 'Tomato', price: '₦200', image: require('../assets/a2.jpeg') },
  { id: '3', title: 'Pepper', price: '₦800', image: require('../assets/a3.jpeg') },
  { id: '4', title: 'Ugu', price: '₦300', image: require('../assets/a4.jpeg') },
  { id: '5', title: 'Beef', price: '₦1000', image: require('../assets/a5.jpeg') },
  { id: '6', title: 'Onions', price: '₦400', image: require('../assets/a6.jpeg') },
  { id: '7', title: 'Ponmo', price: '₦600', image: require('../assets/a7.jpeg') },
  { id: '8', title: 'Tete', price: '₦700', image: require('../assets/a8.jpg') },
  { id: '9', title: 'Beans', price: '₦900', image: require('../assets/a9.jpg') },
  { id: '10', title: 'Yam', price: '₦150', image: require('../assets/a10.jpg') }
];

// Render individual product item
const renderProductItem = ({ item }) => (
  <View style={styles.productCard}>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName}>{item.title}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
    <TouchableOpacity style={styles.addToCartButton}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top bar */}
      

      {/* Featured title */}
      <Text style={styles.featuredTitle}>Featured</Text>

      {/* Categories (can be updated with real data later) */}
      <View style={styles.categories}>
        <Text style={styles.categoryItem}>Vegetables</Text>
        <Text style={styles.categoryItem}>Fruits</Text>
        <Text style={styles.categoryItem}>Meat</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={dummyProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 50,
    height: 50,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D7B30',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryItem: {
    fontSize: 16,
    color: '#2D7B30',
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    color: '#2D7B30',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#2D7B30',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#2D7B30',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

