import {set_Refresh_Token,set_Token} from '../constant'

const authReducer = (state = {tokenDetails: null}, action) =>{
    switch(action.type) {
        case set_Token :
            return {
                ...state.tokenDetails,
                auth: action.auth,
            };
            case set_Refresh_Token :
                return {
                    ...state.tokenDetails,
                    data: action.data,
                }; 
            default:
                return state;       
    }
}

export default authReducer;