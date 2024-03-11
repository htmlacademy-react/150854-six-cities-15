import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import App from './components/app/app';
import { AuthorizationStatus, CARDS_COUNT, } from './consts';
import { offers } from './mock/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const authorizationStatus = AuthorizationStatus.Auth;

root.render(
  <React.StrictMode>

    <HelmetProvider>
      <BrowserRouter>
        <App
          cardsCount={CARDS_COUNT}
          offers = {offers}
          authorizationStatus = { authorizationStatus }
        />
      </BrowserRouter>
    </HelmetProvider>

  </React.StrictMode>
);
