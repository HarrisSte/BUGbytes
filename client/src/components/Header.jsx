import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../context/CurrentUser";
import logo from "./../assets/sony-buttons-logo.png";
import Search from './Search';



function Header() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <div>
      <img src={logo} width={60} height={60} />
      <Search />
      <div>
        {isLoggedIn() ? (
          <>
            <Link to="/profile">Profile</Link>
            <button type="button" onClick={logoutUser}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
