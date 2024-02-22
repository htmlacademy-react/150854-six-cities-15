function SortingFormOption ({sortingOption}: {sortingOption : string}): JSX.Element {
  return (
    <li className="places__option places__option--active" tabIndex={0}>{sortingOption}</li>
  );
}


export { SortingFormOption };

