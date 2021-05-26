import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default yup.object().shape({
  userName: yup.string().required('User Name is Required'),
  address: yup.string().required('Address is Required'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});
