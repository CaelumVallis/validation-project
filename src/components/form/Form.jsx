import { useFormik } from 'formik';
import './Form.css';

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

export const Form = ({ pushToStore }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      pushToStore(values);
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
          data-testid='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div data-testid='errorMessage' className='error-message'>
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>

      <div className='form-field'>
        <label htmlFor='lastName'>Last name:</label>
        <input
          id='lastName'
          data-testid='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div data-testid='errorMessage' className='error-message'>
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>

      <div className='form-field'>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          data-testid='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div data-testid='errorMessage' className='error-message'>
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className='form-field'>
        <label htmlFor='message'>Message:</label>
        <input
          id='message'
          data-testid='message'
          name='message'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? (
          <div data-testid='errorMessage' className='error-message'>
            {formik.errors.message}
          </div>
        ) : null}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};
