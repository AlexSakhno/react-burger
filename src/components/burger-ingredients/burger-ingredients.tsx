import React, { FC, useContext, useMemo, useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../ingredient';

import { IngredientContext } from '../../context/ingredientContext';
import { tabs } from '../../utils/data';
import styles from './burger-ingredients.module.css';

const BurgerIngredients: FC = () => {
  const data = useContext(IngredientContext);
  const [current, setCurrent] = useState('bun');

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const refArr = { bun: bunRef, sauce: sauceRef, main: mainRef };

  const handleTabClick = (tabRef: any, tab: string) => {
    tabRef.current.scrollIntoView({ behavior: 'smooth' });
    setCurrent(tab);
  };

  const tabsConstructor = useMemo(() => {
    return tabs.map((tab) => {
      const { name, title } = tab;

      return (
        <Tab
          key={name}
          value={name}
          active={current === name}
          onClick={() => handleTabClick(refArr[name], name)}
        >
          {title}
        </Tab>
      );
    });
  }, [current, refArr]);

  const ingrConstruction = useMemo(() => {
    return tabs.map((tab) => {
      const name = tab.name;

      return (
        <section key={tab.name} ref={refArr[tab.name]}>
          <h2
            className='text text_type_main-medium pt-10'
            data-ankor={tab.name}
          >
            {tab.title}
          </h2>
          <div className={`${styles.ingredients} mb-10`}>
            {data.map((item) => {
              return (
                item.type === name && <Ingredient key={item._id} {...item} />
              );
            })}
          </div>
        </section>
      );
    });
  }, [data, refArr]);

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title} text text_type_main-large pb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.tabs}>{tabsConstructor}</div>
      <section className={styles.context}>{ingrConstruction}</section>
    </div>
  );
};

export default BurgerIngredients;
