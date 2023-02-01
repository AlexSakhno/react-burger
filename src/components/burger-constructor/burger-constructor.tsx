import React, { FC } from 'react';

import {
  DragIcon,
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';

import styles from './burger-constructor.module.css';
import { data } from '../../utils/data';

const BurgerConstructor: FC = () => {
  const datas = data.slice(0, data.length / 2);

  const totalPrice = () =>
    datas.reduce((acc, item) => {
      return (acc = acc + item.price);
    }, 0);

  const ingredients = () => {
    return datas.map((item, index) => {
      return (
        <div key={uuidv4()}>
          {!index ||
            (index !== datas.length - 1 && (
              <div className={`${styles.item} mb-4`}>
                <DragIcon type='primary' />
                <ConstructorElement
                  price={item.price}
                  text={item.name}
                  thumbnail={item.image_mobile}
                />
              </div>
            ))}
        </div>
      );
    });
  };

  return (
    <div className={`${styles.container} mt-25`}>
      <div className={`${styles.item} mb-4 pl-8`}>
        <ConstructorElement
          key={uuidv4()}
          price={data[0].price}
          text={`${data[0].name}\n(верх)`}
          thumbnail={data[0].image_mobile}
          type={'top'}
          isLocked
        />
      </div>

      <div className={`${styles.ingridients} mb-4 pr-4`}>{ingredients()}</div>

      <div className={`${styles.item} mb-4 pl-8`}>
        <ConstructorElement
          key={data[0]._id}
          price={data[0].price}
          text={`${data[0].name}\n(низ)`}
          thumbnail={data[0].image_mobile}
          type={'bottom'}
          isLocked
        />
      </div>
      <div className={`${styles.total} mt-10`}>
        <Button htmlType='button' type='primary' size='large'>
          Оформить заказ
        </Button>
        <span className={`${styles.totalPrice} text text_type_digits-medium`}>
          <CurrencyIcon type='primary' /> {totalPrice()}
        </span>
      </div>
    </div>
  );
};

export default BurgerConstructor;
