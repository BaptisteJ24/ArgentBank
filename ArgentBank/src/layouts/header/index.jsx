import argentBankLogo from './../../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="nav__logo" to="/">
          <img
            className="nav__logo__image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="nav__item" to="/login">
            <i className="fa fa-user-circle"></i>
            <span>Sign In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
