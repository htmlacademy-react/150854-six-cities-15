
import { SortingForm } from '../sorting-form/sorting-form';
import { PlaceCard } from '../place-card/place-card';
import { Offers, Offer } from '../../types/types';
import { useState } from 'react';

type PlacesProps = {
  cardsCount: number;
  offers: Offers;
}

function Places({ offers, cardsCount }: PlacesProps): JSX.Element {
  const [, setId] = useState('');
  const handleSetId = (id: string) => {
    setId(id);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <SortingForm />
      <div className="cities__places-list places__list tabs__content">
        {offers.slice(0, cardsCount).map((offer: Offer) => <PlaceCard offer={ offer } key={ offer.id } handleSetId = {handleSetId} />)}
      </div>
    </section>
  );
}

export { Places };

