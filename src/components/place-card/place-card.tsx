import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import { AppRoute } from '../../consts';

type placeCardProps = {
  offer: Offer;
  handleSetId: (key: string) => void;
};


function PlaceCard({ offer, handleSetId }: placeCardProps) {
  const { id, title, type, price, previewImage, isFavorite, isPremium } = offer;

  return (
    <Link to={AppRoute.Offer.replace(':id', id)}>
      <article
        className="cities__card place-card"
        onMouseOver={() => handleSetId(offer.id)}
      >
        {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={isFavorite ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export { PlaceCard };

