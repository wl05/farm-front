import { GET_TITLE } from '../types-constant';
export const getTitle = (dispatch, title) => {
    dispatch({type : GET_TITLE, title});
}