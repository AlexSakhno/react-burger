import React, { FC } from 'react';
import {
  CurrencyIcon,
  Counter,
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';

import { data, tabs } from '../../utils/data';
import styles from './burger-ingredients.module.css';

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = React.useState('bun');

  const navigateScroll = () => {
    const targets: NodeListOf<Element> =
      document.querySelectorAll('*[data-target]');

    for (const el of targets as any) {
      const target = document.querySelector(
        `*[data-ankor="${el.dataset.target}"]`
      );
      el.addEventListener('click', (e: Event) => {
        e.preventDefault();
        target?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  };

  const rnd = () => Math.floor(Math.random() * 2);

  const tabsConstructor = () => {
    return tabs.map((tab) => {
      const name = tab.name;

      return (
        <Tab
          key={uuidv4()}
          value={tab.name}
          active={current === name}
          onClick={setCurrent}
        >
          <span data-target={tab.name} onClick={() => navigateScroll()}>
            {tab.title}
          </span>
        </Tab>
      );
    });
  };

  const ingrConstruction = () => {
    return tabs.map((tab) => {
      const name = tab.name;
      return (
        <div key={uuidv4()}>
          <h2
            className='text text_type_main-medium pt-10'
            data-ankor={tab.name}
          >
            {tab.title}
          </h2>
          <div className={`${styles.ingredients} mb-10`}>
            {data.map((item) => {
              return (
                item.type === name && (
                  <div key={uuidv4()} className={styles.ingredient}>
                    <img src={item.image} alt={item.name} />
                    {rnd() ? (
                      <Counter count={1} extraClass={styles.counter} />
                    ) : (
                      ''
                    )}
                    <span
                      className={`${styles.price} text text_type_main-default`}
                    >
                      {item.price}
                      <CurrencyIcon type='primary' />
                    </span>
                    <h3 className={styles.name}>{item.name}</h3>
                  </div>
                )
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title} text text_type_main-large pb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.tabs}>{tabsConstructor()}</div>
      <section className={styles.context}>{ingrConstruction()}</section>
    </div>
  );
};

export default BurgerIngredients;
