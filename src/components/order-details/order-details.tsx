import { FC } from 'react';
import { Done } from '../../images';
import { TOrder } from '../../utils/types';
import styles from './order-details.module.css';

const OrderDetails: FC<TOrder> = ({ success, order }) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.order} text_type_digits-large m-8`}>
        {order.number}
      </span>
      <span className={`${styles.text} text text_type_main-medium`}>
        индефикатор заказа
      </span>
      <img src={Done} alt='Заказ оформлен' className='m-15' />
      <span className={` text text_type_main-default`}>
        {success && 'Ваш заказ начали готовить'}
      </span>
      <span
        className={` text text_type_main-default text_color_inactive mt-2 mb-30`}
      >
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

export default OrderDetails;
