// services/authService.js

import api from './api';

// Function to handle user login
export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        return response.data; // Return the response data
    } catch (error) {
        throw error; // Handle errors as needed
    }
};

// Function to handle user signup
export const signup = async (name, email, password) => {
    try {
        const response = await api.post('/auth/signup', { name, email, password });
        return response.data; // Return the response data
    } catch (error) {
        throw error; // Handle errors as needed
    }
};
