import React, { useState } from 'react';
import getProducts from './getProducts';
import CardsView from './components/CardsView/CardsView';
import ListView from './components/ListView/ListView';
import IconSwitch from './components/IconSwitch/IconSwitch';
import './Store.css';

export default function Store() {
  const LIST = 'view_module';
  const CARDS = 'view_list';

  const [view, viewSwitch] = useState(LIST);

  const onSwitch = () => {
    viewSwitch((prev) => prev === LIST ? CARDS : LIST);
  }

  const ViewComponent = view === LIST
    ? <ListView items={getProducts()}/>
    : <CardsView cards={getProducts()}/>;

  return (
    <div className="store">
      <header className="store-header">
        <IconSwitch
          icon={view}
          onSwitch={onSwitch}
        />
      </header>
      <section className="store-products">
        {ViewComponent}
      </section>
    </div>
  );
}