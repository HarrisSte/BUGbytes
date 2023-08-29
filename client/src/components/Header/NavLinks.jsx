import Nav from "react-bootstrap/Nav";
import { useCurrentUserContext } from "../../context/CurrentUser";
import logo from "../../assets/BUGbytes-white.png";
import Search from "../Search";
import "./header.css";

function NavLinks() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} width={70} height={80} />
        </a>
      </div>
      <div className="search-buttons">
        <Search />
        {isLoggedIn() ? (
          <>
            <div className="header-buttons">
              <Nav className="justify-content-center">
                <Nav.Item className="profile">
                  <Nav.Link
                    href="/profile"
                    style={{
                      color: "white",
                    }}
                  >
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="log-out">
                  <Nav.Link
                    onClick={logoutUser}
                    style={{
                      color: "white",
                    }}
                  >
                    Log Out
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </>
        ) : (
          <>
            <div className="header-login-buttons">
              <Nav className="login-signin justify-content-center">
                <Nav.Item className="log-in">
                  <Nav.Link
                    href="/login"
                    style={{
                      color: "white",
                    }}
                  >
                    Log In
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="sign-up">
                  <Nav.Link
                    href="/register"
                    style={{
                      color: "white",
                    }}
                  >
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavLinks;