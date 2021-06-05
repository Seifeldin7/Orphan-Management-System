import * as Requester from "../../utils/requester";
import * as actionTypes from '../types/user';

export const fetchUsersSuccess = (usersData) => {
    return {
        type: actionTypes.FETCH_USERS,
        usersData: usersData
    };
};

export const fetchUsers = () => {
    return async (
        dispatch
    ) => {
        try {
            const users = await Requester.getRequest('/user');
            dispatch(fetchUsersSuccess(users.data))
        } catch (errMsg) {
            console.log(`${errMsg}`);
        }
    };
};

export const deleteUserFail = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error
    };
}

export const deleteUserSuccess = (id) => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
        id: id,
    };
};

export const deleteUser = (id) => {
    return async (
        dispatch
    ) => {
        try {
            const response = await Requester.deleteRequest(`/user?id=${id}`);
            dispatch(deleteUserSuccess(id));
        } catch (errMsg) {
            dispatch(deleteUserFail());
        }
    };
};
