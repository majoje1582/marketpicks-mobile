import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderTrackingScreen = ({ navigation }) => {
  // Dummy data for the activity indicator
  const orderStatus = "Shipped"; // Can be 'Processing', 'Shipped', 'Delivered'
  
  // Dummy data for order details
  const orderDetails = {
    orderId: '12345',
    orderDate: '2024-10-10',
    items: 3,
  };

  // Dummy data for recommended products
  const recommendedProducts = [
    { id: '1', name: 'Product 1', price: '$10', image: require('../assets/a1.jpeg') },
    { id: '2', name: 'Product 2', price: '$15', image: require('../assets/a2.jpeg') },
    { id: '3', name: 'Product 3', price: '$12', image: require('../assets/a3.jpeg') },
    { id: '4', name: 'Product 4', price: '$20', image: require('../assets/a4.jpeg') },
    { id: '5', name: 'Product 5', price: '$18', image: require('../assets/a5.jpeg') },
  ];

  // Function to navigate to individual product page
  const navigateToProduct = (id) => {
    navigation.navigate('Single Product', { productId: id });
  };

  // Render product cards
  const renderProductCard = ({ item }) => (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={() => navigateToProduct(item.id)}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Ionicons name="heart-outline" size={20} color="black" style={styles.wishlistIcon} />
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Activity Indicator Section */}
      <View style={styles.activityIndicatorContainer}>
        <Text style={styles.activityText}>Order Status: {orderStatus}</Text>
        {/* Add your activity indicator here (e.g., three circles and pipes logic) */}
        <View style={styles.statusIndicator}>
          {/* Replace with your custom logic for activity indicator */}
          <View style={styles.circleActive} />
          <View style={styles.pipe} />
          <View style={orderStatus === "Delivered" ? styles.circleActive : styles.circleInactive} />
          <View style={styles.pipe} />
          <View style={orderStatus === "Shipped" ? styles.circleActive : styles.circleInactive} />
        </View>
      </View>

      <View style={styles.separator} />

      {/* Order Details Section */}
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderDetailsHeader}>Order Details</Text>
        <Text>Order ID: {orderDetails.orderId}</Text>
        <Text>Order Date: {orderDetails.orderDate}</Text>
        <Text>Items in Order: {orderDetails.items}</Text>
      </View>

      <View style={styles.separator} />

      {/* Recommended Products Section */}
      <Text style={styles.recommendedHeader}>Recommended Products</Text>
      <FlatList
        data={recommendedProducts}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={3}  // Change to 3 columns
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  activityIndicatorContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  activityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  circleActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  circleInactive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF7E00',
  },
  pipe: {
    height: 2,
    width: 40,
    backgroundColor: '#FF7E00',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 16,
  },
  orderDetailsContainer: {
    marginBottom: 16,
  },
  orderDetailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recommendedHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productsContainer: {
    paddingBottom: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    marginVertical: 4,
  },
  wishlistIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  addToCartButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#FF7E00',
    borderRadius: 4,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OrderTrackingScreen;
