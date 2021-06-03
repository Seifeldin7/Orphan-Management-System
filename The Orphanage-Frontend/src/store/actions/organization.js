import { ThunkDispatch } from "redux-thunk";
import * as Requester from "../../utils/requester";
import * as actionTypes from '../types/organization';

export const getOrganizations = ( organizationsData ) => {
    return {
        type: actionTypes.SHOW_ORGANIZATIONS,
        organizationsData: organizationsData
    };
}

export const showOrganizations = () => {
    return async (
        dispatch
    ) => {
        try {
            const organizations = await Requester.getRequest('/organization');
            console.log(organizations.data)
            dispatch( getOrganizations(organizations.data) );
        } catch (errMsg) {
            console.log(`${errMsg}`);
        }
    };
};

