import { Link, withRouter ,useNavigate} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/', { replace: true });
  };

  return (
    <div className="Header-container">
        <Link to="/home">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
            className="Header-web-image"
          />
        </Link>
        <ul className='nav-items'>
          <li className="nav-menu-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>

    </div >
  )
}

export default Header
