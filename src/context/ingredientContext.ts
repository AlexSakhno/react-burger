import { TIngredient } from './../utils/types';
import React from 'react';

export const IngredientContext = React.createContext<TIngredient[]>([]);
