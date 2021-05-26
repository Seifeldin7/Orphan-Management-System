import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import MoneyDonationReducer from "./reducers/moneyDonation";


const rootReducer = combineReducers({
  moneyDonations: MoneyDonationReducer
})


export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
