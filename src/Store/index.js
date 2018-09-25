import configureStore from './configureStore';
import login from "../Routes/Login/reducer";
import { combineReducers } from 'redux';
const reducers = {
    login
};

// 给增强后的 createStore 函数传入 reducer，生成唯一的 store 状态树
const store = configureStore(combineReducers(reducers));

export default store;