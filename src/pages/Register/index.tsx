import { Formik, Form, Field } from 'formik';
import { TextField, Button, Typography, Grid } from '@mui/material';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { register } from '@/service/User';
import { RegisterRequest } from '@/types/api';
import { toast } from 'react-toastify';

interface FormValues {
    username: string;
    password: string;
    passwordConfirmation: string;
}

export default function Register() {
    const navigate = useNavigate();

    const RegisterSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        passwordConfirmation: Yup.string()
            .required('Password confirmation is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
    });

    const initialValues: FormValues = { username: '', password: '', passwordConfirmation: '' };

    const handleSubmit = async (values: FormValues) => {
        const request: RegisterRequest = { username: values.username, password: values.password };
        const response: any = await register(request);

        if (response.status === 200) {
            toast.success(response.data.message);
            navigate("/login");
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={6} style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={RegisterSchema}
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
                            <Field
                                as={TextField}
                                name="passwordConfirmation"
                                label="Password Confirmation"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={errors.passwordConfirmation && touched.passwordConfirmation}
                                helperText={errors.passwordConfirmation && touched.passwordConfirmation ? errors.passwordConfirmation : ''}
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
                    You have an account? <Link to="/login">Login</Link>
                </Typography>
            </Grid>
        </Grid>
    );
}