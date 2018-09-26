import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../actionTypes';

const initialState = {
    loginLoading : false,
    loginError : false,
    loginData : null
    
}

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        // 登录
        case USER_LOGIN_LOADING:
            newState.loginLoading = true
            newState.loginError = false
            break
        case USER_LOGIN_SUCCESS:
            newState.loginLoading = false
            newState.loginError = false
            newState.loginData = action.result
            break
        case USER_LOGIN_ERROR:
            newState.loginError = true
            newState.loginLoading = false
            break
    }
    
    return {...newState};
}