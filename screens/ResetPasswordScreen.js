import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

const ResetPasswordScreen = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!token || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setIsLoading(true);

    try {
      const endpoint = 'https://api.foodliie.com/api/auth/reset-password';
      const payload = { token, password };

      await axios.post(endpoint, payload);

      Alert.alert('Success', 'Password reset successful! You can now log in.');
      navigation.navigate('AuthScreen'); // Navigate back to login
    } catch (error) {
      console.error(error);
      Alert.alert('Reset Failed', error.response?.data?.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>

      {/* Token Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter reset token"
        placeholderTextColor="#999"
        value={token}
        onChangeText={setToken}
      />

      {/* New Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Reset Button */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword} disabled={isLoading}>
        {isLoading ? <ActivityIndicator size="small" color="#FFF" /> : <Text style={styles.buttonText}>Reset Password</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D7B30',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#2D7B30',
    borderRadius: 25,
    marginBottom: 20,
    color: '#2D7B30',
  },
  button: {
    backgroundColor: '#FF7E00',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ResetPasswordScreen;
