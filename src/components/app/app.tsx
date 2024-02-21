import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  cardsCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainScreen {...props}/>
  );
}

export default App;
