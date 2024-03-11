import { ReviewForm } from '../review-form/review-form';
import { ReviewList } from '../review-list/review-list';


type ReviewProps = {
  isAuth: boolean;
}

function Review({isAuth}: ReviewProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewList/>

      {isAuth && <ReviewForm/>}

    </section>
  );
}


export { Review };
