import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/Auth/authSelectors'
import {selectIsRefreshing} from 'redux/Auth/authSelectors'


export const PrivateRoute = ({ children }) => {

    const isLoggedin = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    if (!isLoggedin && !isRefreshing) {
        return <Navigate to='/login' />
    }
    return children
}