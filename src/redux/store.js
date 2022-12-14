import { configureStore } from "@reduxjs/toolkit";
import {contactsReducer} from './sliceContacts'





export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
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
