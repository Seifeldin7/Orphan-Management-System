import { ThunkDispatch } from "redux-thunk";
import * as Requester from "../../utils/requester";
import * as actionTypes from "../types/moneyDonation";

export const showMoneyDonations = () => {
  return async (dispatch) => {
    try {
      const donations = await Requester.getRequest("/money-donation");
    } catch (errMsg) {
      console.log(`${errMsg}`);
    }
  };
};

export const donateMoneyFail = (error) => {
  return {
    type: actionTypes.DONATE_MONEY_FAIL,
    error: error,
  };
};

export const donateMoneyStart = () => {
  return {
    type: actionTypes.DONATE_MONEY_START,
  };
};

export const donateMoneySuccess = (donationData) => {
  alert("Donation Completed Successfully");
  return {
    type: actionTypes.DONATE_MONEY_SUCCESS,
    donationData: donationData,
  };
};

export const donateMoney = (body) => {
  return async (dispatch) => {
    try {
      dispatch(donateMoneyStart());
      let userId = localStorage.getItem("userId");
      const response = await Requester.postRequest(
        `/money-donation?user_id=${userId}`,
        body
      );
      dispatch(donateMoneySuccess(response.data));
    } catch (errMsg) {
      dispatch(donateMoneyFail());
    }
  };
};
