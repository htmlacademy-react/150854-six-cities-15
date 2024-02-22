import { SORTING_OPTIONS } from '../../consts';
import { SortingFormOption } from '../sorting-form-option/sorting-form-option';


function SortingForm(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {SORTING_OPTIONS[0]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_OPTIONS.map((sortingOption: string) => <SortingFormOption sortingOption={sortingOption} key={sortingOption} />)}
      </ul>
    </form>
  );
}


export { SortingForm };
//
