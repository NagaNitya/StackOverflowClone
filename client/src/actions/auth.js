import * as api from '../api'
import { setCurrentUser } from './currentUser.js'


export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        alert('Error occurred. Please try again.')
        console.log(error)
    }
}
export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        alert('Invalid credentials. Please try again.')
        console.log(error)
    }
}
