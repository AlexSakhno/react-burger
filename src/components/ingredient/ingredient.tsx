import { FC, useState } from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../../utils/types';
import styles from './ingredient.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details';

const Ingredient: FC<TIngredient> = (props) => {
  const [isModal, setIsModal] = useState(false);

  const addIngredient = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className={styles.ingredient} onClick={addIngredient}>
        <img src={props.image} alt={props.name} />
        <Counter count={0} extraClass={styles.counter} />
        <span className={`${styles.price} text text_type_main-default`}>
          {props.price}
          <CurrencyIcon type='primary' />
        </span>
        <h3 className={styles.name}>{props.name}</h3>
      </div>
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        title={'Детали ингредиента'}
      >
        <IngredientDetails {...props} />
      </Modal>
    </>
  );
};

export default Ingredient;
