import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import { login } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, MenuItem, Typography } from '@mui/material';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    userType: Yup.string().required('User type is required'),
});

const Login: React.FC = () => {
    const { login: authLogin } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            userType: 'Guest',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await login(values.username, values.password, values.userType);
                const token = response.data.token;
                authLogin(token);
                navigate('/products');
            } catch (error) {
                alert('Invalid credentials');
            }
        },
    });

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>Login</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="userType"
                    name="userType"
                    label="User Type"
                    select
                    value={formik.values.userType}
                    onChange={formik.handleChange}
                    error={formik.touched.userType && Boolean(formik.errors.userType)}
                    helperText={formik.touched.userType && formik.errors.userType}
                    margin="normal"
                >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Guest">Guest</MenuItem>
                </TextField>
                <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: '16px' }}>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;
