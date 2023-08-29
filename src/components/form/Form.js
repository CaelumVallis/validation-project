import { useFormik } from 'formik';
import './Form.css';

import { useDispatch } from 'react-redux';
import { addValues } from '../../store/formDataSlice';

// The `first_name` and `last_name` fields should be validated on the presents of information
// The `email` field should be validated on the correctness of the email entered
// The `message` field should be validated on the length of the message (minimum 10 characters)
// State management code could be generated in a single file
// Success message could be displayed as a simple alert
// To verify that information was recorded and could be further sent, use console.log or alert.

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.message.length < 10) {
    errors.message = 'Must be 10 characters or more';
  }

  return errors;
};

export const Form = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addValues(values));
      alert('Your personal data was succesfully delivered to 3rd parties');
      resetForm();
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form-field'>
        <label htmlFor='firstName'>First name:</label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className='error-message'>{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className='form-field'>
        <label htmlFor='lastName'>Last name:</label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className='error-message'>{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className='form-field'>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error-message'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='form-field'>
        <label htmlFor='message'>Message:</label>
        <input
          id='message'
          name='message'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className='error-message'>{formik.errors.message}</div>
        ) : null}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};
