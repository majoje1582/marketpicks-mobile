import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const recommendedProducts = [
  { id: '1', name: 'Product 1', image: require('../assets/a1.jpeg') },
  { id: '2', name: 'Product 2', image: require('../assets/a2.jpeg') },
  { id: '3', name: 'Product 3', image: require('../assets/a3.jpeg') },
  { id: '4', name: 'Product 4', image: require('../assets/a4.jpeg') },
  { id: '5', name: 'Product 5', image: require('../assets/a5.jpeg') },
  { id: '6', name: 'Product 6', image: require('../assets/a6.jpeg') },
];

export default function TrackingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section with Tracking Form and Submit Button */}
      <View style={styles.topSection}>
        <TextInput placeholder="Enter Tracking Number..." style={styles.trackingInput} />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('TrackingResult')}  // Navigate to TrackingResult page
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />

      {/* Recommended Products Section */}
      <Text style={styles.sectionHeader}>Products You May Like</Text>
      <View style={styles.productsContainer}>
        <FlatList
          data={recommendedProducts}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.productImage} />
              </TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  trackingInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  submitButton: {
    backgroundColor: '#FF7E00',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginVertical: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  productsContainer: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 10,
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
