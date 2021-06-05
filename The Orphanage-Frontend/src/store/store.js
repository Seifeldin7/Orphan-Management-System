import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import MoneyDonationReducer from "./reducers/moneyDonation";
import itemDonationsReducer from "./reducers/itemDonation";
import OrganizationsReducer from "./reducers/organization";
import AuthReducer from "./reducers/auth";
import UsersReducer from "./reducers/user";
import ItemsReducer from "./reducers/item";


const rootReducer = combineReducers({
  moneyDonations: MoneyDonationReducer,
  itemDonations: itemDonationsReducer,
  organizations: OrganizationsReducer,
  auth: AuthReducer,
  users: UsersReducer,
  items: ItemsReducer
})


export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
