import React, { FC } from 'react';

import {
  DragIcon,
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import { data } from '../../utils/data';

const BurgerConstructor: FC = () => {
  const datas = data.slice(0, data.length / 2);

  const ingredients = () => {
    return datas.map((item, index) => {
      return (
        <>
          {!index ||
            (index !== datas.length - 1 && (
              <div className={`${styles.item} mb-4`} key={item._id}>
                <DragIcon type='primary' />
                <ConstructorElement
                  price={item.price}
                  text={`${item.name}`}
                  thumbnail={item.image_mobile}
                />
              </div>
            ))}
        </>
      );
    });
  };

  return (
    <div className={`${styles.container} mt-25`}>
      <div className={`${styles.item} mb-4 pl-8`}>
        <ConstructorElement
          key={data[0]._id}
          price={data[0].price}
          text={data[0].name}
          thumbnail={data[0].image_mobile}
          type={'top'}
          isLocked
        />
      </div>

      <div className={` ${styles.ingridients}  mb-4 pr-4`}>{ingredients()}</div>

      <div className={`${styles.item} mb-4 pl-8`}>
        <ConstructorElement
          key={data[data.length - 1]._id}
          price={data[data.length - 1].price}
          text={data[data.length - 1].name}
          thumbnail={data[data.length - 1].image_mobile}
          type={'bottom'}
          isLocked
        />
      </div>
      <div className={`${styles.total} mt-10`}>
        <Button htmlType='button' type='primary' size='large'>
          Оформить заказ
        </Button>
        <span className={`${styles.totalPrice} text text_type_digits-medium`}>
          <CurrencyIcon type='primary' /> 610
        </span>
      </div>
    </div>
  );
};

export default BurgerConstructor;
