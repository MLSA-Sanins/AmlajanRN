import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string('')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .max(20, ({max}) => `Password must be at most ${max} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string('')
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
