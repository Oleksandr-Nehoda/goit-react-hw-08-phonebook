import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
    
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
 'auth/logout', async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout');
      console.log(res)
      clearAuthHeader();
      return res.data;
    } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
    }
 }
);

 export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistToken = state.auth.token
    if (persistToken === null)
        return thunkAPI.rejectWithValue('Error')
    try {
        setAuthHeader(persistToken);
        const res = await axios.get('/users/current')
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});