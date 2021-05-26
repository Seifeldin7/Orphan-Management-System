import * as actionTypes from '../types/itemDonation';

import { updateObject } from '../utility';

const initialState = {
    donations: [],
    loading: false,
    showFailureAlert: false
};

const donateItemStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const donateItemFail = (state, action) => {
    return updateObject(state, { loading: false, showFailureAlert: true });
};

const donateItemSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        donations: state.donations.concat(action.donationData)
    });
};

const showDonations = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DONATE_ITEM_START: return donateItemStart(state, action);
        case actionTypes.DONATE_ITEM_FAIL: return donateItemFail(state, action);
        case actionTypes.DONATE_ITEM_SUCCESS: return donateItemSuccess(state, action);
        case actionTypes.SHOW_ITEM_DONATIONS: return showDonations(state, action);
        default: return state;
    }
};

export default reducer;