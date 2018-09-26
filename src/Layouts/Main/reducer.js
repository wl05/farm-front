import { AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_ERROR, CLEAR_USER_INFO } from '../../Routes/actionTypes';

const initialState = {
    authLoading : false,
    authError : false,
    userInfo : null
    
}

export default (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        // 鉴权
        case AUTH_LOGIN_LOADING:
            newState.authLoading = true
            newState.authError = false
            break
        case AUTH_LOGIN_SUCCESS:
            newState.authLoading = false
            newState.authError = false
            newState.userInfo = action.result
            break
        case AUTH_LOGIN_ERROR:
            newState.authError = true
            newState.authLoading = false
            break
        
        case CLEAR_USER_INFO:
            newState.userInfo = null
            break
    }
    return {...newState};
}