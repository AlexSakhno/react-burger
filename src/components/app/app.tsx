import React, { useContext, useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';

import AppHeader from '../app-header';
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';

import { IngredientContext } from '../../context/ingredientContext';
import { getFetch } from '../../api';
import { TIngredient } from '../../utils/types';

import styles from './app.module.css';

const App = () => {
  const [state, setState] = useState<TIngredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getFetch('/ingredients')
      .then((resp) => setState(resp.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <IngredientContext.Provider value={state}>
        <AppHeader />
        <main className={styles.container}>
          <section className={styles.context}>
            {loading ? (
              <Bars
                height='80'
                width='80'
                color='#66c7ff'
                ariaLabel='bars-loading'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
              />
            ) : error ? (
              <span>Ошибка получения данных.</span>
            ) : (
              <>
                <BurgerIngredients />
                <BurgerConstructor />
              </>
            )}
          </section>
        </main>
      </IngredientContext.Provider>
    </>
  );
};

export default App;
