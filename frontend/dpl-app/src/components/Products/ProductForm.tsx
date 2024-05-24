import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { ProductDto } from '../../dtos/ProductDto';

interface ProductFormProps {
    onSave: (product: ProductDto) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSave }) => {
    const formik = useFormik({
        initialValues: {
            productId: undefined, // Include productId in initial values
            description: '',
            imageUrl: '',
            imageName: '',
            imageFormat: '',
            amount: 0,
        },
        validationSchema: Yup.object({
            description: Yup.string().max(100, 'Description must be 100 characters or less').required('Required'),
            imageUrl: Yup.string().url('Invalid URL').required('Required'),
            imageName: Yup.string().required('Required'),
            imageFormat: Yup.string().required('Required'),
            amount: Yup.number().positive('Amount must be positive').required('Required'),
        }),
        onSubmit: (values) => {
            onSave(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && typeof formik.errors.description === 'string' ? formik.errors.description : ''}
                margin="normal"
            />
            <TextField
                fullWidth
                id="imageUrl"
                name="imageUrl"
                label="Image URL"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                helperText={formik.touched.imageUrl && typeof formik.errors.imageUrl === 'string' ? formik.errors.imageUrl : ''}
                margin="normal"
            />
            <TextField
                fullWidth
                id="imageName"
                name="imageName"
                label="Image Name"
                value={formik.values.imageName}
                onChange={formik.handleChange}
                error={formik.touched.imageName && Boolean(formik.errors.imageName)}
                helperText={formik.touched.imageName && typeof formik.errors.imageName === 'string' ? formik.errors.imageName : ''}
                margin="normal"
            />
            <TextField
                fullWidth
                id="imageFormat"
                name="imageFormat"
                label="Image Format"
                value={formik.values.imageFormat}
                onChange={formik.handleChange}
                error={formik.touched.imageFormat && Boolean(formik.errors.imageFormat)}
                helperText={formik.touched.imageFormat && typeof formik.errors.imageFormat === 'string' ? formik.errors.imageFormat : ''}
                margin="normal"
            />
            <TextField
                fullWidth
                id="amount"
                name="amount"
                label="Amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && typeof formik.errors.amount === 'string' ? formik.errors.amount : ''}
                margin="normal"
            />
            <Button color="primary" variant="contained" type="submit">
                Save
            </Button>
        </form>
    );
};

export default ProductForm;
