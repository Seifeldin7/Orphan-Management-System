import * as Requester from "../../utils/requester";
import * as actionTypes from '../types/itemDonation';

export const showItemDonations = () => {
    return async (
        dispatch
    ) => {
        try {
            const donations = await Requester.getRequest('/item-donation');
            console.log(donations);
        } catch (errMsg) {
            console.log(`${errMsg}`);
        }
    };
};

export const donateItemFail = ( error ) => {
    return {
        type: actionTypes.DONATE_ITEM_FAIL,
        error: error
    };
}

export const donateItemStart = () => {
    return {
        type: actionTypes.DONATE_ITEM_START
    };
};

export const donateItemSuccess = (donationData) => {
    alert("Donation completed successfully");
    return {
        type: actionTypes.DONATE_ITEM_SUCCESS,
        donationData: donationData,
    };
};

export const donateItem = (body) => {
    return async (
        dispatch
    ) => {
        try {
            dispatch( donateItemStart() );
            const response = await Requester.postRequest('/item-donation', body);
            dispatch( donateItemSuccess(response.data) );
        } catch (errMsg) {
            dispatch( donateItemFail() );
        }
    };
};
