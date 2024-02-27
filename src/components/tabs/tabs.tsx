import { CITIES } from '../../consts';
import { TabsItem } from '../tabs-item/tabs-item';


function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city: string) => <TabsItem city={city} key={city} />)}
        </ul>
      </section>
    </div>
  );
}


export { Tabs };

