import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 10,
    reducers: {
increment(state, action) {
    return state + action.payload;
},
decrement(state, action) {
    return state - action.payload;
},
    },
})

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReduser = createReducer(100, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });

export const {increment, decrement} = myValueSlice.actions;


export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});