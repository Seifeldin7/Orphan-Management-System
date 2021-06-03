import * as actionTypes from "../types/moneyDonation";

import { updateObject } from "../utility";

const initialState = {
  donations: [
    {
      amount: 5,
      created_at: "1/1/1111",
      updated_at: "1/1/1112",
      organization: "EDU",
    },
    {
      amount: 10,
      created_at: "1/1/1111",
      updated_at: "1/1/1112",
      organization: "Food Bank",
    },
  ],
  loading: false,
  showFailureAlert: false,
};

const donateMoneyStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const donateMoneyFail = (state, action) => {
  return updateObject(state, { loading: false, showFailureAlert: true });
};

const donateMoneySuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    donations: state.donations.concat(action.donationData),
  });
};

const showDonations = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DONATE_MONEY_START:
      return donateMoneyStart(state, action);
    case actionTypes.DONATE_MONEY_FAIL:
      return donateMoneyFail(state, action);
    case actionTypes.DONATE_MONEY_SUCCESS:
      return donateMoneySuccess(state, action);
    case actionTypes.SHOW_MONEY_DONATIONS:
      return showDonations(state, action);
    default:
      return state;
  }
};

export default reducer;
