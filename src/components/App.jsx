import {Route, Routes} from 'react-router-dom';
import {Contacts} from 'pages/Contacts/Contacts';
import {Layout} from './Layout';
import {HomePage} from 'pages/HomePage/HomePage';
import {Login} from 'pages/Login/Login';
import {Register} from 'pages/Register/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/Auth/authOperations';
import { useEffect } from 'react';
import {PrivateRoute} from './PrivateRoute'
import {RestrictedRoute} from './RestrictedRoute'


export const App = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<RestrictedRoute><Login/></RestrictedRoute>}/>
        <Route path='/contacts' element={<PrivateRoute><Contacts/></PrivateRoute>}/>
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
    </>
  )
}

/* <div>CONTACT</div> */