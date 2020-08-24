import * as types from '@/redux/constants/actionType'
import {actionType} from '@/redux/action/interfaces'
const  initialState={
    getMenuTree:[],
    getMenuList:{
        list:[],
        total:0
    }
};

export default (state = initialState, action:actionType )=> {
    switch (action.type) {
        case types.GETMENUTREE:
            return {...state,getMenuTree:action.data};
        case types.GETMENULIST:
            return {...state,getMenuList:action.data}
        default: 
            return state
    }
}