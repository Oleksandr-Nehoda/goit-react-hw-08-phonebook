import {combineReducers, createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './sliceFilter';


const contactsInitialState = [
    { id: nanoid(7), name: 'Oleksandr Nehoda', number: '(097)399-01-55' },
    { id: nanoid(7), name: 'Hermione Kline', number: '645-17-19' },
    { id: nanoid(7), name: 'Eden Clements', number: '443-89-12' },
    { id: nanoid(7), name: 'Annie Copeland', number: '459-12-56' },
  ];

const contactsSlice  = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
         addMyContact(state, action) {
            if (state.find(contact => contact.name === action.payload.name)) {
                      return alert(`${action.payload.name} is already is contacts`);
                    }
            state.push(action.payload);
          },
          deleteMyContact(state, action) {
            return state.filter(el => el.id !== action.payload);
          },
    },
})

// Генератори екшенів
export const { addMyContact, deleteMyContact } = contactsSlice.actions;

// Селектор
export const getContacts = state => state.contacts.contacts;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;



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
export const persistedContactsReducer = persistReducer(
  persistConfig,
  rootReducer
);