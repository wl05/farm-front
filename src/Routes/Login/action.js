// 将 action.type 抽取为常量，减少出错
import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../actionTypes'
import User from "../../Http/User"
const userService = new User()
export const login = (phone, password) => {
    return async (dispatch, getSate) => {
        dispatch({type : USER_LOGIN_LOADING})
        try {
            let result = await userService.login(phone, password)
            dispatch({type : USER_LOGIN_SUCCESS, result : result.data})
        } catch (err) {
            dispatch({type : USER_LOGIN_ERROR})
        }
    }
}