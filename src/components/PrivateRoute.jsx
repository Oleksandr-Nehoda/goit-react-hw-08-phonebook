import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/Auth/authSelectors'
import {selectIsRefreshing} from 'redux/Auth/authSelectors'


export const PrivateRoute = ({ children }) => {

    const isLoggedin = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    console.log(`isLoggedin`, isLoggedin );
    console.log(`isRefreshing`, isRefreshing );

    if (!isLoggedin && !isRefreshing) {
        console.log(`Відпрацьовує if`, isLoggedin, isRefreshing )
        return <Navigate to='/login' />
    }
    return children
}