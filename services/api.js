// services/api.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pantry-hub-server.onrender.com', // Your API base URL
});

export default api;
