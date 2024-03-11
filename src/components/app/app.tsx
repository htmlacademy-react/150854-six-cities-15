import { Routes, Route } from 'react-router-dom';

import { AppRoute, AuthorizationStatus, } from '../../consts';

import { PrivateRoute } from '../private-route/private-route';

import { MainScreen } from '../../pages/main-screen/main-screen';
import { FavoritesScreen } from '../../pages/favorites-screen/favorites-screen';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { OfferScreen } from '../../pages/offer-screen/offer-screen';

import type { Offers } from '../../types/types';


type AppProps = {
  cardsCount: number;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
}

function App({cardsCount, offers, authorizationStatus}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen cardsCount= {cardsCount} offers = {offers}></MainScreen>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen offers ={offers} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={<OfferScreen offers = {offers} authorizationStatus = {authorizationStatus}/>}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginScreen />}
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundScreen />}
      />
    </Routes>

  );
}

export default App;
