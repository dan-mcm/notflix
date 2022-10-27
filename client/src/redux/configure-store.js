import { createStore } from 'redux';
import { favouritesReducer } from './favouritesReducer';

export const store = createStore(favouritesReducer);
