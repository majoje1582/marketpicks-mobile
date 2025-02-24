import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

 const addToCartService = async (productId, products, setCartItems) => {
  try {
    // Retrieve existing cart items from AsyncStorage
    let itemArray = await AsyncStorage.getItem('cart');
    itemArray = JSON.parse(itemArray) || []; // Initialize as an empty array if null

    // Add the new productId to the cart array
    itemArray.push(productId);
    
    console.log('Updated cart items:', itemArray); // Log the updated array

    // Save the updated array back to AsyncStorage
    await AsyncStorage.setItem('cart', JSON.stringify(itemArray));

    // Notify the user that the item was added to the cart
    Alert.alert('Item Added To Cart', `Product ID: ${productId}`);

    // Filter the products to get items that match those in the cart
    const filteredCartItems = products.filter(product => itemArray.includes(product._id)).map(product => ({
      ...product,
      quantity: 1 // Set default quantity to 1 if not already set
    }));

    console.log('Filtered cart items:', filteredCartItems); // Log the filtered cart items

    // Update the cart items state
    setCartItems(filteredCartItems);

    // Calculate and return the cart item count
    const cartItemsCount = filteredCartItems.length;
    console.log('Cart items count:', cartItemsCount);

    return { cartItemsCount, cartItems: filteredCartItems }; // Return count and items for further use if needed

  } catch (error) {
    console.error('Error adding to cart:', error); // Log any errors
    return error;
  }
};

export default addToCartService 
