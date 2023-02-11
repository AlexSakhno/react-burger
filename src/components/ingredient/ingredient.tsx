import { FC, useState } from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from '../../utils/types';
import styles from './ingredient.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details';

const Ingredient: FC<TIngredient> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.ingredient} onClick={handleOpenModal}>
      <img src={props.image} alt={props.name} />
      <Counter count={0} extraClass={styles.counter} />
      <span className={`${styles.price} text text_type_main-default`}>
        {props.price}
        <CurrencyIcon type='primary' />
      </span>
      <h3 className={styles.name}>{props.name}</h3>
      {isModalOpen && (
        <Modal onClose={handleCloseModal} title={'Детали ингредиента'}>
          <IngredientDetails {...props} />
        </Modal>
      )}
    </div>
  );
};

export default Ingredient;
