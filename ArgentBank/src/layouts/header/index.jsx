import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from './../../features/auth';
import { selectToken, selectUser } from '../../utils/selector';
import axios from 'axios';
import { baseUrl } from './../../utils/const';
import argentBankLogo from './../../assets/img/argentBankLogo.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const name = useSelector(selectUser).firstName;

  useEffect(() => {
    if (token) {
      axios
        .post(
          `${baseUrl}/validatetoken`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )
        .catch((err) => {
          console.error(err);
          navigate('/login');
          dispatch(authActions.logout());
          sessionStorage.clear();
        });
    }
  }, [dispatch, token, navigate]);

  const Logout = () => {
    dispatch(authActions.logout());
    sessionStorage.clear();
    navigate('/');
  };

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
        <div className="nav__item">
          {token ? (
            <React.Fragment>
              <Link className="nav__link" to="/profile">
                <i className="fa fa-user-circle fa-xl"></i>
                <span>{name}</span>
              </Link>
              <button className="nav__button" onClick={Logout}>
                <i className="fa fa-right-from-bracket fa-xl"></i>
                <span>Sign out</span>
              </button>
            </React.Fragment>
          ) : (
            <Link className="nav__link" to="/login">
              <i className="fa fa-user-circle fa-xl"></i>
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
