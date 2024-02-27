import { SORTING_OPTIONS } from '../../consts';


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
        {SORTING_OPTIONS.map((sortingOption: string) =>
          <li className="places__option places__option--active" tabIndex={0} key={sortingOption}>{sortingOption}</li>)}
      </ul>
    </form>
  );
}


export { SortingForm };

