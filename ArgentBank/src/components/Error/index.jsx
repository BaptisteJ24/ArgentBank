import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Page not found</p>
      <Link className="error__link" to="/">
        Return to the home page
      </Link>
    </div>
  );
};

export default Error;
