// 将 action.type 抽取为常量，减少出错
import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../actionTypes'
import User from "../../Http/User"
const userService = new User()
export const login = (username, password) => {
    return async (dispatch, getSate) => {
        dispatch({type : USER_LOGIN_LOADING})
        try {
            let data = await userService.login(username, password)
            console.log('data', data)
            dispatch({type : USER_LOGIN_SUCCESS, data})
        } catch (err) {
            dispatch({type : USER_LOGIN_ERROR})
        }
    }
}