import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { REGISTER_USER } from '../graphql/mutations';

import { useCurrentUserContext } from '../context/CurrentUser';

export default function Registration() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [register, { error }] = useMutation(REGISTER_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await register({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });
      const { token, user } = mutationResponse.data.register;
      loginUser(user, token);
      navigate('/profile');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      {error ? (
        <div>
          <p className='error-text'>The provided credentials are incorrect</p>
        </div>
      ) : null}
      <form id='registration-form' onSubmit={handleFormSubmit}>
        <h2>Register</h2>
        <label htmlFor='firstName'>
          First name:
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='lastName'>
          Last name:
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formState.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            placeholder='Enter your email address'
            name='email'
            type='email'
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            placeholder='******'
            name='password'
            type='password'
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Sign Up</button>
        <p>
          Already have an account? Log In <Link to='/login'>here</Link>
        </p>
      </form>
    </>
  );
}
