import {useSelector, useDispatch} from 'react-redux';
import {selectUser} from 'redux/Auth/authSelectors'
import {logOut} from 'redux/Auth/authOperations'
import css from './UserMenu.module.css'


export const UserMenu = () => {

    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const loginOut = () => {
     dispatch(logOut())
    }
    
    return (
        <div>
            <p className={css.user}>Welcome, {user.name}!</p>
            <button className={css.btn_logout} type='button' onClick={loginOut}>Logout</button>
        </div>
    )
}