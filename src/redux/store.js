import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from './sliceContacts'
import {filterReducer} from './sliceFilter'





export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


// const myValueSlice = createSlice({
//     name: 'myValue',
//     initialState: 10,
//     reducers: {
// increment(state, action) {
//     return state + action.payload;
// },
// decrement(state, action) {
//     return state - action.payload;
// },
//     },
// })


// export const {increment, decrement} = myValueSlice.actions;
