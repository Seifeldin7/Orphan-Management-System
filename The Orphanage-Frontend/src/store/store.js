import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import MoneyDonationReducer from "../store/reducers/money-donation";


const rootReducer = combineReducers({
  moneyDonations: MoneyDonationReducer
})


export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
