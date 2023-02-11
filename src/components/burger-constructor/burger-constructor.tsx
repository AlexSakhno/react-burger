import React, { FC, useContext, useMemo, useState } from 'react';

import {
  DragIcon,
  CurrencyIcon,
  Button,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import OrderDetails from '../order-details';

import styles from './burger-constructor.module.css';
import { IngredientContext } from '../../context/ingredientContext';
import { postFetch } from '../../api';
import { TOrder } from '../../utils/types';

const BurgerConstructor: FC = () => {
  const data = useContext(IngredientContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState<TOrder>();
  const [error, setError] = useState(false);

  const datas = data.slice(0, data.length / 2);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    getOrder();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const totalPrice = useMemo(
    () =>
      datas.reduce((acc, item) => {
        return (acc = acc + item.price);
      }, 0),
    [datas]
  );

  const ingredients = useMemo(() => {
    return datas.map((item) => {
      return (
        <div key={item._id}>
          {item.type !== 'bun' && (
            <div className={`${styles.item} mb-4`}>
              <DragIcon type='primary' />
              <ConstructorElement
                price={item.price}
                text={item.name}
                thumbnail={item.image_mobile}
              />
            </div>
          )}
        </div>
      );
    });
  }, [datas]);

  const getOrder = () => {
    const ids = datas.map((item) => item._id);

    postFetch('/orders', { ingredients: ids })
      .then((resp) => setOrder(resp))
      .catch(() => setError(true));
  };

  return (
    <div className={`${styles.container} mt-25`}>
      <div className={`${styles.item} mb-4 pl-8`}>
        <ConstructorElement
          price={data[0].price}
          text={`${data[0].name}\n(верх)`}
          thumbnail={data[0].image_mobile}
          type={'top'}
          isLocked
        />
      </div>

      <div className={`${styles.ingridients} mb-4 pr-4`}>{ingredients}</div>

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
        <Button
          htmlType='button'
          type='primary'
          size='large'
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
        <span className={`${styles.totalPrice} text text_type_digits-medium`}>
          <CurrencyIcon type='primary' /> {totalPrice}
        </span>
      </div>
      {isModalOpen && (
        <>
          <Modal onClose={handleCloseModal}>
            {error && 'Ошибка получения данных...'}
            {order && <OrderDetails {...order} />}
          </Modal>
        </>
      )}
    </div>
  );
};

export default BurgerConstructor;
