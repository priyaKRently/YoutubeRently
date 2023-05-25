import {
    request_Refresh_Token,
    set_Refresh_Token,
    authenticate_User,
    set_Token,
    logout_User,
    set_logout
} from '../constant';


export const requestRefreshToken = () => {
    return {
        type: request_Refresh_Token,
    };
};
export const authenticateUser = () => {
    return {
        type: authenticate_User,
    };
};
export const setToken = auth => {
    return {
        type: set_Token,
        auth,
    };
};
export const setLogout = auth => {
    return {
        type: set_logout,
        auth,
    };
};

export const setRefreshToken = data => {
    return {
        type: set_Refresh_Token,
        data,
    };
};

export const logoutUser = () => {
    return {
        type: logout_User,
    };
};