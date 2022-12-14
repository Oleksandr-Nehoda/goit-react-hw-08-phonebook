import { createSlice } from "@reduxjs/toolkit";

const filterSlice  = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
         contactsFilter(state, action) {
            return state = action.payload;
          },  
    },
})

// Генератори екшенів
export const { contactsFilter } = filterSlice.actions;

// Селектор
export const getFilter = state => state.filter;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;