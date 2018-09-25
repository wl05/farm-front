import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../actionTypes';

const initialState = {
    loginLoading : false,
    loadingError : false
}

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        // 登录
        case USER_LOGIN_LOADING:
            newState.loadingLoading = true
            break;
        case USER_LOGIN_SUCCESS:
            newState.loadingLoading = false
            break
        case USER_LOGIN_ERROR:
            newState.loadingError = true
            newState.loadingLoading = false
            break
        
    }
    
    return {...newState};
}