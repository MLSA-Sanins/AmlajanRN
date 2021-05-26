import * as yup from 'yup';

export default yup.object().shape({
  displayName: yup.string().required('User Name is Required'),
  address: yup.string().required('Address is Required'),
});
