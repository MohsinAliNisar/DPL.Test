import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { addToCart } from '../../services/api';

const Cart: React.FC = () => {
    const { cart, clearCart } = useCart();

    const handleSubmitCart = async () => {
        try {
            await addToCart(cart);
            clearCart();
            alert('Cart submitted successfully');
        } catch (error) {
            alert('Error submitting cart');
        }
    };

    const totalAmount = cart.reduce((total, item) => total + item.totalAmount, 0);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Cart</Typography>
            <List>
                {cart.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`${item.productName} (Qty: ${item.qty})`}
                            secondary={`Amount: ${item.amount}, Total: ${item.totalAmount}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6">Total Amount: {totalAmount}</Typography>
            <Button variant="contained" color="primary" onClick={handleSubmitCart}>
                Submit Cart
            </Button>
        </Container>
    );
};

export default Cart;
