import React, { FC, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';

import Ingredient from '../ingredient';

import { tabs } from '../../utils/data';
import { TIngredient } from '../../utils/types';
import styles from './burger-ingredients.module.css';

interface Props {
  data: TIngredient[];
}

const BurgerIngredients: FC<Props> = ({ data }) => {
  const [current, setCurrent] = useState('bun');

  const tabsConstructor = () => {
    return tabs.map((tab) => {
      const { name, title } = tab;

      return (
        <Tab
          key={uuidv4()}
          value={name}
          active={current === name}
          onClick={setCurrent}
        >
          {title}
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
                item.type === name && <Ingredient key={uuidv4()} {...item} />
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
