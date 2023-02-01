import React from 'react';
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4 mb-10`}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul className={styles.navlist}>
            <li className={`${styles.navitem} text_type_main-default`}>
              <BurgerIcon type='primary' />
              <a href='/' className={styles.url}>
                Конструктор
              </a>
            </li>
            <li
              className={`${styles.navitem} text_type_main-default text_color_inactive`}
            >
              <ListIcon type='secondary' />
              <a href='/' className={styles.url}>
                Лента заказов
              </a>
            </li>
          </ul>
          <Logo />
        </nav>

        <div className={styles.profile}>
          <ProfileIcon type='secondary' />
          <span
            className={`${styles.navitem} text_type_main-default text_color_inactive`}
          >
            <a href='/' className={styles.url}>
              Личный кабинет
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
