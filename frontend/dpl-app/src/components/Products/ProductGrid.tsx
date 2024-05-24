import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../services/api';
import { useCart } from '../../contexts/CartContext';
import { Grid, Paper, Typography, Button, Container } from '@mui/material';

const ProductGrid: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const { addToCart } = useCart();

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            alert('Error fetching products');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteProduct(id);
            fetchProducts();
        } catch (error) {
            alert('Error deleting product');
        }
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>Products</Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.productId} xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ padding: '16px', position: 'relative' }}>
                            <Typography variant="h6">{product.description}</Typography>
                            <img src={product.imageUrl} alt={product.imageName} style={{ width: '100%', height: 'auto' }} />
                            <Typography variant="body1">Amount: {product.amount}</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => addToCart({ productId: product.productId, productName: product.description, qty: 1, amount: product.amount, totalAmount: product.amount })}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDelete(product.productId)}
                                style={{ position: 'absolute', top: '16px', right: '16px' }}
                            >
                                Delete
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductGrid;
