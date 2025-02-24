import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = ({ navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSubsectionPress = () => {
    // Navigate to the contact page (can be updated later)
    navigation.navigate('Contact');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Get Help</Text>
        
        <TouchableOpacity style={styles.subsection} onPress={handleSubsectionPress}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🔒</Text>
          </View>
          <View>
            <Text style={styles.subsectionTitle}>Accounts</Text>
            <Text style={styles.subsectionDesc}>Manage your account information</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subsection} onPress={handleSubsectionPress}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚚</Text>
          </View>
          <View>
            <Text style={styles.subsectionTitle}>Logistics Query</Text>
            <Text style={styles.subsectionDesc}>Track your orders and deliveries</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subsection} onPress={handleSubsectionPress}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🛍️</Text>
          </View>
          <View>
            <Text style={styles.subsectionTitle}>Shopping Guide</Text>
            <Text style={styles.subsectionDesc}>Learn how to shop effectively</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subsection} onPress={handleSubsectionPress}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>💳</Text>
          </View>
          <View>
            <Text style={styles.subsectionTitle}>Payments</Text>
            <Text style={styles.subsectionDesc}>Manage your payment options</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>FAQs</Text>

        <TouchableOpacity onPress={() => toggleFAQ(0)} style={styles.faqQuestion}>
          <Text style={styles.faqText}>How do I create an account?</Text>
        </TouchableOpacity>
        {expandedIndex === 0 && (
          <Text style={styles.faqAnswer}>To create an account, go to the registration page and fill out the form.</Text>
        )}
        <View style={styles.separator} />

        <TouchableOpacity onPress={() => toggleFAQ(1)} style={styles.faqQuestion}>
          <Text style={styles.faqText}>What is the return policy?</Text>
        </TouchableOpacity>
        {expandedIndex === 1 && (
          <Text style={styles.faqAnswer}>You can return items within 30 days of purchase, with a valid receipt.</Text>
        )}
        <View style={styles.separator} />

        <TouchableOpacity onPress={() => toggleFAQ(2)} style={styles.faqQuestion}>
          <Text style={styles.faqText}>How can I track my order?</Text>
        </TouchableOpacity>
        {expandedIndex === 2 && (
          <Text style={styles.faqAnswer}>You can track your order by visiting the tracking page and entering your order number.</Text>
        )}
        <View style={styles.separator} />

        <TouchableOpacity onPress={() => toggleFAQ(3)} style={styles.faqQuestion}>
          <Text style={styles.faqText}>What payment methods are accepted?</Text>
        </TouchableOpacity>
        {expandedIndex === 3 && (
          <Text style={styles.faqAnswer}>We accept credit cards, debit cards, and PayPal as payment methods.</Text>
        )}
        <View style={styles.separator} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D3D3D3', // Light grey background
    paddingVertical: 20,
  },
  section: {
    backgroundColor: '#fff', // White background for sections
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#008000', // Green for section header
  },
  subsection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#D3D3D3', // Light grey for subsections
    borderRadius: 10,
    padding: 10,
    marginBottom: 10, // Space between subsections
  },
  iconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  subsectionTitle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000', // Green for subsection title
  },
  subsectionDesc: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  faqQuestion: {
    paddingVertical: 10,
  },
  faqText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF7E00', // Amber orange for FAQ questions
  },
  faqAnswer: {
    fontSize: 14,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#008000', // Green for FAQ answers
  },
  separator: {
    height: 1,
    backgroundColor: '#D3D3D3', // Light grey for separator
    marginVertical: 5,
  },
});

export default HelpScreen;
