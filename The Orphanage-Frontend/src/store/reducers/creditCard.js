import * as actionTypes from '../types/creditCard';

import { updateObject } from '../utility';

const initialState = {
    creditCard: {},
    loading: false,
    showFailureAlert: false
};

const updateCreditCardStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const updateCreditCardFail = (state, action) => {
    return updateObject(state, { loading: false, showFailureAlert: true });
};

const updateCreditCardSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        creditCard: action.cardData
    });
};

const fetchCreditCard = (state, action) => {
    return updateObject(state, { loading: false,  creditCard: action.cardData});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CREDIT_CARD_FAIL: return updateCreditCardFail(state, action);
        case actionTypes.UPDATE_CREDIT_CARD_START: return updateCreditCardStart(state, action);
        case actionTypes.UPDATE_CREDIT_CARD_SUCCESS: return updateCreditCardSuccess(state, action);
        case actionTypes.FETCH_CREDIT_CARD: return fetchCreditCard(state, action);
        default: return state;
    }
};

export default reducer;