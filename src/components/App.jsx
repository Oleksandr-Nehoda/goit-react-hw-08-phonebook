import {Route, Routes} from 'react-router-dom';
import {Contacts} from 'pages/Contacts/Contacts';
import {Layout} from './Layout';
import {HomePage} from 'pages/HomePage/HomePage';
import {Login} from 'pages/Login/Login';
import {Register} from 'pages/Register/Register';


export const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
    </>
  )


}