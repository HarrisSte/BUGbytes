import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../../context/CurrentUser";
import logo from "../../assets/BUGbytes-white.png";
import Search from '../Search';
import './header.css'

function Header() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <div className='header'>
      <div className='logo'>
      <a href='/'>
        <img src={logo} width={70} height={80} />
      </a>
      </div>
      <div className='search-buttons'>
      <Search />
        {isLoggedIn() ? (
          <>
          <div className='header-buttons'>
            <Link className={'profile'}to="/profile">Profile</Link>
            <button className={'log-out'} type="button" onClick={logoutUser}>
              Log Out
            </button>
          </div>
          </>
        ) : (
          <>
          <div className='header-login-buttons'>
            <Link className={'log-in'}to="/login">Log In</Link>
            <Link className={'sign-up'}to="/register">Sign Up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;