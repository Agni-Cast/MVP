import { Link } from 'react-router-dom';
import { useLogout } from '../useLogout';

const Navbar = () => {
  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Vacation Bucketlist</h1>
        </Link>
        <nav>
          <div>
              <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/login-form">Login</Link>
            <Link to="/signup-form">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;