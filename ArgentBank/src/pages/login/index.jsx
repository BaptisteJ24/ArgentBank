import { Link } from 'react-router-dom';
// import Login from '../../features/login';

const LoginPage = () => {
  return (
    <main className="main bg-dark login">
      <section className="login__content">
        <i className="fa fa-user-circle login__icon"></i>
        <h1 className="login__title">Sign In</h1>
        <form>
          <div className="input__wrapper">
            <label>
              Username
              <input type="text" id="username" />
            </label>
          </div>
          <div className="input__wrapper">
            <label>
              Password
              <input type="password" id="password" />
            </label>
          </div>
          <div className="input__remember">
            <label>
              <input type="checkbox" id="remember-me" />
              Remember me
            </label>
          </div>
          <Link to="/profile" className="login__button" role="button">
            Sign In
          </Link>
          {/* <button className="login__button" onClick={(event) => Login(event)}>
            Sign In
          </button> */}
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
