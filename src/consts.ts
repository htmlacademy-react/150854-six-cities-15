const CARDS_COUNT = 5;
const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const SORTING_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
const RATING = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' }
];
enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}


enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export { CARDS_COUNT, RATING, AppRoute, AuthorizationStatus, CITIES, SORTING_OPTIONS };
