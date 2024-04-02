import { Formik, Form, Field } from 'formik';
import { TextField, Button, Typography, Grid } from '@mui/material';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

interface FormValues {
    username: string;
    password: string;
}

export default function Login() {
    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const initialValues: FormValues = { username: '', password: '' };

    const handleSubmit = (values: FormValues) => {
        console.log(values);
        // Add your login logic here
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={8} style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field
                                as={TextField}
                                name="username"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={errors.username && touched.username}
                                helperText={errors.username && touched.username ? errors.username : ''}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={errors.password && touched.password}
                                helperText={errors.password && touched.password ? errors.password : ''}
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
                    You haven't an account? <Link to="/register">Register</Link>
                </Typography>
            </Grid>
        </Grid>
    );
}