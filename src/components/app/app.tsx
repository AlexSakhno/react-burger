import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';

import AppHeader from '../app-header';
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';

import { fetchData } from '../../api';
import { TIngredient } from '../../utils/types';

import styles from './app.module.css';

const App = () => {
  const [state, setState] = useState<TIngredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData()
      .then((resp) => setState(resp.data))
      .catch(() => setError(true));

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state.length]);

  return (
    <>
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
              <BurgerIngredients data={state} />
              <BurgerConstructor data={state} />
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default App;
