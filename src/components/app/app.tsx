import { Routes, Route } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../consts';

import { PrivateRoute } from '../private-route/private-route';

import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import Offer from '../../pages/offer-screen/offer-screen';
import Login from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';


type AppProps = {
  cardsCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen {...props} />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<Offer />}
      />
      <Route
        path={AppRoute.Login}
        element={<Login />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundScreen />}
      />
    </Routes>

  );
}

export default App;
