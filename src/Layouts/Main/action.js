// 将 action.type 抽取为常量，减少出错
import { AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, CLEAR_USER_INFO } from '../../Routes/actionTypes'
import User from "../../Http/User"
const userService = new User()
export const auth = () => {
    return async (dispatch, getSate) => {
        dispatch({type : AUTH_LOGIN_LOADING})
        try {
            let result = await userService.auth()
            dispatch({type : AUTH_LOGIN_SUCCESS, result : result.data.data})
        } catch (err) {
            dispatch({type : AUTH_LOGIN_ERROR})
        }
    }
}
export const clearUserInfo = (dispatch) => {
    dispatch({
        type : CLEAR_USER_INFO
    })
    
}