import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from 'redux/Auth/authSelectors'

export const Navigation = () => {

const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink to='/' className={css.link}>Home</NavLink>
            {isLoggedIn && <NavLink to='/contacts' className={css.link}>Contacts</NavLink>}
        </nav>
    )
}