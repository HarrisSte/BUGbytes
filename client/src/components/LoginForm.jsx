import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../graphql/mutations';
import { useCurrentUserContext } from '../context/CurrentUser';
import '../pages/Login/login.css'
import LoginBackground from '../assets/login-background.png'

export default function Login() {
  const { loginUser } = useCurrentUserContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const { token, user } = mutationResponse.data.login;
      loginUser(user, token);
      navigate('/profile');
    } catch (e) {
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
                backgroundImage: `url(${LoginBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
              }}
      >
    <>
      {error ? (
        <div>
          <p className='error-text'>The provided credentials are incorrect!</p>
        </div>
      ) : null}
      <form id='login-form' onSubmit={handleFormSubmit}>
        <h2 className='login-text'>Log In</h2>
        <label htmlFor='email' className='email'>
          Email:
          <input
            className='email-input'
            placeholder='Enter your email address'
            name='email'
            type='email'
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password' className='password'>
          Password:
          <input
            className='password-input'
            placeholder='******'
            name='password'
            type='password'
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <button type='submit' className='log-in-submit'>Log In</button>
        <p className='need-an-account'>
          Need an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </>
    </div>
  );
}
