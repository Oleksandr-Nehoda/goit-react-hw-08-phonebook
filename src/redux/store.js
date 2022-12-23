import { configureStore } from "@reduxjs/toolkit";
import {filterReducer} from './sliceFilter'
import {contactsReducer} from './sliceContacts'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

