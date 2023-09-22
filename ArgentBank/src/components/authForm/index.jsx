import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as authActions from './../../features/auth';
import { baseUrl } from './../../utils/const';

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.loginStart());

    axios
      .post(`${baseUrl}/login`, {
        email: username,
        password,
      })
      .then((res) => {
        dispatch(authActions.loginSuccess({ token: res.data.body.token }));
        navigate('/profile');
      })
      .catch((err) => {
        dispatch(authActions.loginFailure({ error: err.message }));
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input__wrapper">
        <label>
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="input__wrapper">
        <label>
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="input__remember">
        <label>
          <input type="checkbox" id="remember-me" />
          Remember me
        </label>
      </div>
      <button className="login__button" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default AuthForm;
