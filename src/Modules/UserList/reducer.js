import { GET_TITLE } from '../types-constant';

const initialState = {
    memberList : [],
    inputInfo : {
        name : '',
        tel : ''
    },
    title : '成员列表'
};

const typesCommands = {
    [GET_TITLE](state, action) {
        return {...state, title : action.title};
    }
};

export default (state = initialState, action) => {
    const actionResponse = typesCommands[ action.type ];
    return actionResponse ? actionResponse(state, action) : state;
}