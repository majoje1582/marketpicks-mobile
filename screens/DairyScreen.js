import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Dummy data for categories and products
const recommendedProducts = [
  { id: '1', name: 'Product 1', image: require('../assets/a1.jpeg') },
  { id: '2', name: 'Product 2', image: require('../assets/a2.jpeg') },
  { id: '3', name: 'Product 3', image: require('../assets/a3.jpeg') },
  { id: '4', name: 'Product 4', image: require('../assets/a4.jpeg') },
  { id: '5', name: 'Product 5', image: require('../assets/a5.jpeg') },
  { id: '6', name: 'Product 6', image: require('../assets/a6.jpeg') },
];

// Dummy data for categories
const categories = [
  { name: 'Fruits', screen: 'Fruit' },
  { name: 'Vegetables', screen: 'Vegetable' },
  { name: 'Dairy', screen: 'Dairy' },
  { name: 'Meat', screen: 'Meat' },
  { name: 'Snacks', screen: 'Snack' },
  { name: 'Oil Products', screen: 'Oil Product' },
];

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section with Search and Chat */}
      <View style={styles.searchSection}>
        <TextInput placeholder="Search..." style={styles.searchInput} />
        <Ionicons name="chatbubbles-outline" size={24} color="gray" style={styles.chatIcon} />
      </View>

      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />

      {/* Header Section */}
      

      {/* Content Section */}
      <View style={styles.contentSection}>
        {/* Categories */}
        
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              onPress={() => navigation.navigate(category.screen)}
            >
              {/* Navigate to respective screen */}
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recommended Products */}
        <View style={styles.productsContainer}>
          <Text style={styles.sectionHeader}>Dairy Products</Text>
          <FlatList
            data={recommendedProducts}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <TouchableOpacity>
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  chatIcon: {
    padding: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginVertical: 5,
  },
  headerSection: {
    flexDirection: 'row',
    color: 'green',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#Ff7e00',
  },
  sectionHeader2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#Ff7e00',
    
  },
  contentSection: {
    flex: 1,
    flexDirection: 'row',
  },
  categoriesContainer: {
    width: '34%',
    padding: 10,
    backgroundColor: '#f0f0f0', // Gray background that starts from the bottom of header and stretches to the bottom
    justifyContent: 'flex-start',
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    backgroundColor: '#d3d3d3',
    marginBottom: 10,
  },
  productsContainer: {
    width: '66%',
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  productName: {
    textAlign: 'center',
    padding: 5,
  },
});
