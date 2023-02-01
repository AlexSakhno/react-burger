export type Type = 'sauce' | 'bun' | 'main';

export type TIngredient = {
  _id: string;
  name: string;
  type: Type;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};
