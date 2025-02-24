import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEnquirySubmit = () => {
    // Submit form logic here
    console.log('Enquiry submitted:', { name, email, message });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroText}>Contact Us</Text>
      </View>
      
      {/* Contact Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Phone: +123456789</Text>
        <Text style={styles.infoText}>Email: contact@fooddeck.com</Text>
        <Text style={styles.infoText}>Address: 123 FoodDeck Lane</Text>
      </View>

      {/* Enquiry Section */}
      <View style={styles.enquirySection}>
        <Text style={styles.enquiryTitle}>Send us a message</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Submit" onPress={handleEnquirySubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heroSection: {
    height: 150,
    backgroundColor: '#FF7E00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    color: '#2D7B30',
    marginBottom: 5,
  },
  enquirySection: {
    padding: 20,
    borderColor: '#FF7E00',
    borderWidth: 1,
    borderRadius: 10,
  },
  enquiryTitle: {
    fontSize: 18,
    color: '#FF7E00',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2D7B30',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#F0F0F0',
  },
});

export default ContactScreen;
