import * as actionTypes from '../types/organization';

import { updateObject } from '../utility';

const initialState = {
    organizations: [],
    loading: false,
};

const showOrganizations = (state, action) => {
    return updateObject(state, { organizations: action.organizationsData });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ORGANIZATIONS: return showOrganizations(state, action);
        default: return state;
    }
};

export default reducer;
