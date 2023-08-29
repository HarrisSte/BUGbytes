import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import SignupBackground from '../assets/signup-background.png'
import { REGISTER_USER } from '../graphql/mutations';
import '../pages/Register/register.css'
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
    <div className="homepage"
              style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${SignupBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
      >
    <>
      {error ? (
        <div>
          <p className='error-text-registration'>The provided credentials are incorrect!</p>
        </div>
      ) : null}
      <form id='registration-form' onSubmit={handleFormSubmit}>
        <h2 className='register-text'>Register</h2>
        <label htmlFor='firstName' className='first-name'>
          First name:
          <input
            className='register-first-name-input'
            placeholder='John'
            type='text'
            id='firstName'
            name='firstName'
            value={formState.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='lastName' className='last-name'>
          Last name:
          <input
            className='register-last-name-input'
            placeholder='Doe'
            type='text'
            id='lastName'
            name='lastName'
            value={formState.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email' className='register-email'>
          Email:
          <input
            className='register-email-input'
            placeholder='Enter your email address'
            name='email'
            type='email'
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password' className='register-password'>
          Password
          <input
            className='register-password-input'
            placeholder='******'
            name='password'
            type='password'
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit' className='sign-up-submit'>Sign Up</button>
        <p className='have-an-account'>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </form>
    </>
    </div>
  );
}
