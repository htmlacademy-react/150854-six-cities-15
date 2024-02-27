import PlaceCard from '../../components/place-card/place-card';
import { Header } from '../../components/header/header';
import { Tabs } from '../../components/tabs/tabs';
import { SortingForm } from '../../components/sorting-form/sorting-form';


type MainScreenProps = {
  cardsCount: number;
}


function MainScreen({ cardsCount }: MainScreenProps,): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortingForm/>
              <div className="cities__places-list places__list tabs__content">
                {Array(cardsCount).fill(<PlaceCard />)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default MainScreen;
