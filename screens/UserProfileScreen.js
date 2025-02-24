import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function UserProfileScreen() {
  // Dummy user and order status data
  const [user, setUser] = useState({
    name: 'John Doe',
    profileImage: 'https://via.placeholder.com/150', // Dummy profile image URL
  });

  const [orderStatus, setOrderStatus] = useState('shipped'); // This would dynamically come from the backend

  // Function to get status icon based on the current order status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <MaterialIcons name="hourglass-empty" size={24} color="orange" />;
      case 'shipped':
        return <FontAwesome name="truck" size={24} color="orange" />;
      case 'delivered':
        return <Ionicons name="checkmark-circle-outline" size={24} color="green" />;
      case 'returned':
        return <MaterialIcons name="rotate-left" size={24} color="red" />;
      case 'failed':
        return <Ionicons name="close-circle-outline" size={24} color="red" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroContent}>
          <TouchableOpacity>
            <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <TouchableOpacity>
              <Ionicons name="pencil-outline" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Order Tracking Section */}
      <View style={styles.orderSection}>
        <Text style={styles.sectionTitle}>My Orders</Text>
        <View style={styles.trackingSection}>
          <View>{getStatusIcon(orderStatus)}</View>
          <View>{getStatusIcon('shipped')}</View>
          <View>{getStatusIcon('delivered')}</View>
        </View>
      </View>

      {/* Wishlist, Recently Viewed, Address Management */}
      <View style={styles.otherSection}>
        <TouchableOpacity style={styles.iconText}>
          <Ionicons name="heart-outline" size={24} color="gray" />
          <Text style={styles.iconTextLabel}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconText}>
          <Ionicons name="eye-outline" size={24} color="gray" />
          <Text style={styles.iconTextLabel}>Recently Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconText}>
          <Ionicons name="location-outline" size={24} color="gray" />
          <Text style={styles.iconTextLabel}>Address Management</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    height: 180, // Smaller height
    backgroundColor: '#FF7E00',
    borderBottomLeftRadius: 80, // Smaller slope in the original direction
    borderBottomRightRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    width: '85%', // Increased width
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    position: 'absolute',
    bottom: -40, // Positioned below the arch
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderSection: {
    marginTop: 60, // Separate from hero section
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trackingSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  otherSection: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between', // Stack last items
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconTextLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});
