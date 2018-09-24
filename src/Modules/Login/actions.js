// 将 action.type 抽取为常量，减少出错
import { GET_TITLE } from '../types-constant';
export const getTitle = (dispatch, title) => {
    dispatch({type : GET_TITLE, title});
}