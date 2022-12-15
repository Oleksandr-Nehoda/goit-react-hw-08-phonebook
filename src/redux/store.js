import { configureStore } from "@reduxjs/toolkit";
import {filterReducer} from './sliceFilter'
import {persistedContactsReducer} from './sliceContacts'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
    whitelist: ['contacts'],
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export const persistor = persistStore(store);