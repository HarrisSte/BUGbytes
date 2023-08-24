import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../context/CurrentUser';

function Header() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <nav>
      {isLoggedIn() ? (
        <>
          <Link to='/profile'>Profile</Link>
          <button type='button' onClick={logoutUser}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link to='/login'>Log In</Link>
          <Link to='/register'>Sign Up</Link>
        </>
      )}
    </nav>
  );
}

export default Header;
