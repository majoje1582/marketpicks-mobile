import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Payment Successful</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.successText}>Thank you for your payment!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                    color="#2D7B30"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topBar: {
        backgroundColor: '#FE9801',
        padding: 15,
        alignItems: 'center',
    },
    topBarText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    successText: {
        fontSize: 24,
        color: '#2D7B30',
        marginBottom: 20,
        fontWeight: 'bold',
    },
});

export default SuccessScreen;
