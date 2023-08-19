import AuthForm from '../../components/authForm';

const LoginPage = () => {
  return (
    <main className="main bg-dark login">
      <section className="login__content">
        <i className="fa fa-user-circle login__icon"></i>
        <h1 className="login__title">Sign In</h1>
        <AuthForm />
      </section>
    </main>
  );
};

export default LoginPage;
