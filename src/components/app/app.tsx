import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

const App = () => {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main className={styles.container}>
        <section className={styles.context}>
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </main>
    </>
  );
};

export default App;
