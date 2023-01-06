import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/Auth/authSelectors'


export const RestrictedRoute = ({ children }) => {

    const isLoggedin = useSelector(selectIsLoggedIn)
    if (isLoggedin) {
        return <Navigate to='/contacts' />
    }
    return children
}