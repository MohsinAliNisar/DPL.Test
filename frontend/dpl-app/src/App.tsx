import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import ProductGrid from './components/Products/ProductGrid';
import ProductForm from './components/Products/ProductForm';
import Cart from './components/Cart/Cart';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { token } = useAuth();
    return token ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/products"
                            element={
                                <PrivateRoute>
                                    <ProductGrid />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/products/new"
                            element={
                                <PrivateRoute>
                                    <ProductForm onSave={() => { }} />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <PrivateRoute>
                                    <Cart />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
