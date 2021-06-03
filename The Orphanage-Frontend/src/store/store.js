import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import MoneyDonationReducer from "./reducers/moneyDonation";
import itemDonationsReducer from "./reducers/itemDonation";
import OrganizationsReducer from "./reducers/organization";


const rootReducer = combineReducers({
  moneyDonations: MoneyDonationReducer,
  itemDonations: itemDonationsReducer,
  organizations: OrganizationsReducer
})


export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
