import * as Requester from "../../utils/requester";
import * as actionTypes from '../types/item';

export const fetchItemsSuccess = (itemsData) => {
    return {
        type: actionTypes.FETCH_ITEMS,
        itemsData: itemsData
    };
};

export const fetchItems = () => {
    return async (
        dispatch
    ) => {
        try {
            const items = await Requester.getRequest('/item');
            dispatch(fetchItemsSuccess(items.data));
        } catch (errMsg) {
            console.log(`${errMsg}`);
        }
    };
};

export const updateItemFail = (error) => {
    return {
        type: actionTypes.UPDATE_ITEM_FAIL,
        error: error
    };
}

export const updateItemStart = () => {
    return {
        type: actionTypes.UPDATE_ITEM_START
    };
};

export const updateItemSuccess = (id, itemData) => {
    return {
        type: actionTypes.UPDATE_ITEM_SUCCESS,
        itemData: itemData,
        id: id
    };
};

export const updateItem = (id, body) => {
    return async (
        dispatch
    ) => {
        try {
            dispatch(updateItemStart());
            const response = await Requester.postRequest(`/item?id=${id}`, body);
            dispatch(updateItemSuccess(id, response.data));
        } catch (errMsg) {
            dispatch(updateItemFail());
        }
    };
};

export const deleteItemFail = (error) => {
    return {
        type: actionTypes.DELETE_ITEM_FAIL,
        error: error
    };
}

export const deleteItemSuccess = (id) => {
    return {
        type: actionTypes.DELETE_ITEM_SUCCESS,
        id: id,
    };
};

export const deleteItem = (id) => {
    return async (
        dispatch
    ) => {
        try {
            const response = await Requester.deleteRequest(`/item?id=${id}`);
            dispatch(deleteItemSuccess(id));
        } catch (errMsg) {
            dispatch(deleteItemFail());
        }
    };
};

export const addItemFail = (error) => {
    return {
        type: actionTypes.ADD_ITEM_FAIL,
        error: error
    };
}

export const addItemStart = () => {
    return {
        type: actionTypes.ADD_ITEM_START
    };
};

export const addItemSuccess = (itemData) => {
    return {
        type: actionTypes.ADD_ITEM_SUCCESS,
        itemData: itemData,
    };
};

export const addItem = (body) => {
    return async (
        dispatch
    ) => {
        try {
            dispatch(addItemStart());
            const response = await Requester.postRequest('/item', body);
            dispatch(addItemSuccess(response.data));
        } catch (errMsg) {
            dispatch(addItemFail());
        }
    };
};
