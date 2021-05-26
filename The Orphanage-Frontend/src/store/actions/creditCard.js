import { ThunkDispatch } from "redux-thunk";
import * as Requester from "../../utils/requester";
import * as actionTypes from '../types/creditCard';

export const fetchCreditCardSuccess = (cardData) => {
    return {
        type: actionTypes.FETCH_CREDIT_CARD,
        cardData: cardData
    };
};

export const fetchCreditCard = () => {
    return async (
        dispatch
    ) => {
        try {
            const card = await Requester.getRequest('/api/credit-card');
            dispatch(fetchCreditCardSuccess(card.data))
        } catch (errMsg) {
            console.log(`${errMsg}`);
        }
    };
};

export const updateCreditCardFail = (error) => {
    return {
        type: actionTypes.UPDATE_CREDIT_CARD_FAIL,
        error: error
    };
}

export const updateCreditCardStart = () => {
    return {
        type: actionTypes.UPDATE_CREDIT_CARD_START
    };
};

export const updateCreditCardSuccess = (cardData) => {
    return {
        type: actionTypes.UPDATE_CREDIT_CARD_SUCCESS,
        cardData: cardData,
    };
};

export const updateCreditCard = (body) => {
    return async (
        dispatch
    ) => {
        try {
            dispatch(updateCreditCardStart());
            const response = await Requester.postRequest('/api/credit-card', body);
            dispatch(updateCreditCardSuccess(response.data));
        } catch (errMsg) {
            dispatch(updateCreditCardFail());
        }
    };
};
