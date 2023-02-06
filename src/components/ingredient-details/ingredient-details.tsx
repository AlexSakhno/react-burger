import { FC } from 'react';
import { TIngredient } from '../../utils/types';
import styles from './ingredient-details.module.css';

const IngredientDetails: FC<TIngredient> = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image_large} alt='' className='mb-4' />
      <span className={`${styles.text} text text_type_main-large mb-8`}>
        {props.name}
      </span>

      <div
        className={`${styles.structure} text text_type_main-default text_color_inactive mb-15`}
      >
        <div className={`${styles.structure__item} mr-5`}>
          <span>Калории, калл</span>
          <span className={`text text_type_digits-default`}>
            {props.calories}
          </span>
        </div>
        <div className={`${styles.structure__item} mr-5`}>
          <span>Белки, г</span>
          <span className={`text text_type_digits-default`}>
            {props.proteins}
          </span>
        </div>
        <div className={`${styles.structure__item} mr-5`}>
          <span>Жиры, г</span>
          <span className={`text text_type_digits-default`}>{props.fat}</span>
        </div>
        <div className={styles.structure__item}>
          <span>Углеводы, г</span>
          <span className={`text text_type_digits-default`}>
            {props.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
