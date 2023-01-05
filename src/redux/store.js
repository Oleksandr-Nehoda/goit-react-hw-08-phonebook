import { configureStore } from "@reduxjs/toolkit";
import {filterReducer} from './Contacts/sliceFilter'
import {contactsReducer} from './Contacts/sliceContacts'
import { authReducer } from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

