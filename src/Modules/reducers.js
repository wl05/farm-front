// 引入reducer
import { combineReducers } from 'redux'
import home from './Home/reducer'
import main from './Main/reducer'
import login from './Login/reducer'
import userList from './UserList/reducer'
import transactionHistory from './TransactionHistroy/reducer'

// 合并到主reducer
const reducers = {
    home,
    main,
    login,
    userList,
    transactionHistory
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer
export default combineReducers(reducers);