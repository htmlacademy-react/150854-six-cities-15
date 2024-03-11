import { Header } from '../../components/header/header';
import { Tabs } from '../../components/tabs/tabs';
import { Places } from '../../components/places/places';

import type { Offers, } from '../../types/types';


type MainScreenProps = {
  cardsCount: number;
  offers: Offers;
}

function MainScreen({ cardsCount, offers }: MainScreenProps,): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs/>

        <div className="cities">
          <div className="cities__places-container container">
            <Places cardsCount={cardsCount} offers={offers}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export { MainScreen };
