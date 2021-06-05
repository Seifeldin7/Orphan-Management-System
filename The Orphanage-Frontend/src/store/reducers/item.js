import * as actionTypes from "../types/item";

import { updateObject } from "../utility";

const initialState = {
  items: [],
  showFailureAlert: false,
  showSuccessAlert: false,
  loading: false,
};

const updateItemFail = (state, action) => {
  return updateObject(state, { showFailureAlert: true, loading: false });
};

const updateItemSuccess = (state, action) => {
  let newItems = [...state.items];
  for (let i = 0; i < newItems.length(); ++i) {
    if (newItems[i].id === action.id) {
      newItems[i] = action.itemData;
    }
  }
  return updateObject(state, {
    items: newItems,
    showSuccessAlert: true,
    loading: false,
  });
};

const updateItemStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const deleteItemFail = (state, action) => {
  return updateObject(state, { showFailureAlert: true, loading: false });
};

const deleteItemSuccess = (state, action) => {
  let fliteredItems = state.items.filter((item) => item.id !== action.id);
  return updateObject(state, {
    item: fliteredItems,
    showSuccessAlert: true,
  });
};

const fetchItems = (state, action) => {
  return updateObject(state, { items: action.itemsData });
};

const addItemFail = (state, action) => {
  return updateObject(state, { showFailureAlert: true, loading: false });
};

const addItemSuccess = (state, action) => {
  return updateObject(state, {
    items: state.items.concat(action.itemData),
    showSuccessAlert: true,
    loading: false,
  });
};

const addItemStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ITEM_FAIL:
      return deleteItemFail(state, action);
    case actionTypes.DELETE_ITEM_SUCCESS:
      return deleteItemSuccess(state, action);
    case actionTypes.UPDATE_ITEM_SUCCESS:
      return updateItemSuccess(state, action);
    case actionTypes.UPDATE_ITEM_FAIL:
      return updateItemFail(state, action);
    case actionTypes.UPDATE_ITEM_START:
      return updateItemStart(state, action);
    case actionTypes.ADD_ITEM_SUCCESS:
      return addItemSuccess(state, action);
    case actionTypes.ADD_ITEM_FAIL:
      return addItemFail(state, action);
    case actionTypes.ADD_ITEM_START:
      return addItemStart(state, action);
    case actionTypes.FETCH_ITEMS:
      return fetchItems(state, action);
    default:
      return state;
  }
};

export default reducer;
