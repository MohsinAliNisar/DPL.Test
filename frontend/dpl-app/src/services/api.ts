import axios from 'axios';

const API_URL = 'http://localhost:5082/api'; // Adjust the URL as necessary

// Axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = (username: string, password: string, userType: string) => {
    return api.post('/auth/login', { username, password, userType });
};

export const getProducts = () => {
    return api.get('/products');
};

export const addProduct = (product: any) => {
    return api.post('/products', product);
};

export const updateProduct = (id: number, product: any) => {
    return api.put(`/products/${id}`, product);
};

export const deleteProduct = (id: number) => {
    return api.delete(`/products/${id}`);
};

export const addToCart = (cartItems: any) => {
    return api.post('/cart', cartItems);
};

export default api;
