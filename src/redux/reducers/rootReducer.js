import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Reducers
import { reducers as cart } from './cart';
import { reducers as stock } from './stock';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cart,
  stock: stock,
});

export default persistReducer(persistConfig, rootReducer);
