import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartItem {
    productId: number;
    productName: string;
    qty: number;
    amount: number;
    totalAmount: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    clearCart: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.productId === item.productId);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.productId === item.productId
                        ? { ...cartItem, qty: cartItem.qty + item.qty, totalAmount: cartItem.totalAmount + item.amount * item.qty }
                        : cartItem
                );
            }
            return [...prevCart, item];
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
