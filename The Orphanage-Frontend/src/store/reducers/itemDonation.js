import * as actionTypes from "../types/itemDonation";

import { updateObject } from "../utility";

const initialState = {
  donations: [
    {
      type: "Education",
      delivery_method: 1,
      scheduled_date: "1/1/1234",
      created_at: "1/1/1111",
      updated_at: "1/1/1112",
      organization: 'EDU'
    },
    {
      type: "Food",
      delivery_method: 1,
      scheduled_date: "1/1/1234",
      created_at: "1/1/1111",
      updated_at: "1/1/1112",
      organization: 'Food Bank'
    },
  ],
  loading: false,
  showFailureAlert: false,
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
    donations: state.donations.concat(action.donationData),
  });
};

const showDonations = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DONATE_ITEM_START:
      return donateItemStart(state, action);
    case actionTypes.DONATE_ITEM_FAIL:
      return donateItemFail(state, action);
    case actionTypes.DONATE_ITEM_SUCCESS:
      return donateItemSuccess(state, action);
    case actionTypes.SHOW_ITEM_DONATIONS:
      return showDonations(state, action);
    default:
      return state;
  }
};

export default reducer;
