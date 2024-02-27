import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Logo } from '../../components/logo/logo';
import { AppRoute } from '../../consts';


function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404. Page not found</h1>
            <Link to={AppRoute.NotFound}>Return to main</Link>
          </section>
        </div>
      </main>
    </div>


  );
}
export default NotFoundScreen;
