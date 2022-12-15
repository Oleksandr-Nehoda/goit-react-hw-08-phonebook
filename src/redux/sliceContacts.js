import { createSlice, nanoid } from "@reduxjs/toolkit";

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
export const getContacts = state => state.contacts;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

