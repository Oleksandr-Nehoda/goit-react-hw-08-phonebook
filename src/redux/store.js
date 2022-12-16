import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {filterReducer} from './sliceFilter'
import {contactsReducer} from './sliceContacts'
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

// передаємо persistConfig та contactsSlice.reducer редбюсер тієї події яку треба в
// localstorege передати
 const persistedContactsReducer = persistReducer(
  persistConfig,
  rootReducer
);


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);